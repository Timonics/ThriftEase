import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logo from "../Badge/Logo";
import { useMyContext } from "../../context/MyAppDataProvider";
import axios, { AxiosError } from "axios";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";

const ListForm: React.FC = () => {
  type SubCategories = {
    id: number;
    name: string;
  };

  type Product = {
    name: string;
    categoryId: string;
    subCategoryId: string;
    price: number;
    description: string;
    negotiable: boolean;
    condition: string;
    location: string;
    status: string;
    deliveryOptions: DeliveryOptions[];
  };

  type DeliveryOptions = {
    selected: boolean;
    option: string;
  };

  const [deliveryOptionsAvailable, setDeliveryOptionsAvailable] = useState<
    DeliveryOptions[]
  >([
    { selected: false, option: "Home Delivery" },
    { selected: false, option: "Pick Up" },
    { selected: false, option: "Courier" },
  ]);
  const { dbURL } = config;
  const navigate = useNavigate();
  const { categories, userProfile } = useMyContext();
  const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
  const [productInfo, setProductInfo] = useState<Product>({
    name: "",
    categoryId: "",
    subCategoryId: "",
    price: Number(""),
    description: "",
    negotiable: false,
    condition: "",
    location: "",
    status: "",
    deliveryOptions: [],
  });

  const handleSelected = (optionSelected: string) => {
    let deliveryOptionsSelected: DeliveryOptions[] = [];
    setDeliveryOptionsAvailable(
      (deliveryOptionsSelected = deliveryOptionsAvailable.map(
        (deliverySelect) => {
          if (deliverySelect.option === optionSelected) {
            return {
              ...deliverySelect,
              selected: !deliverySelect.selected,
            };
          } else {
            return deliverySelect;
          }
        }
      ))
    );
    setProductInfo((prevState) => {
      const deliverySelected = deliveryOptionsSelected.filter(
        (deliverySelect) => deliverySelect.selected
      );
      return {
        ...prevState,
        deliveryOptions: deliverySelected,
      };
    });
  };

  const deliveryElements = deliveryOptionsAvailable.map((option) => {
    return (
      <div
        key={option.option}
        className={`cursor-pointer py-2 px-3 text-xs ${
          option.selected
            ? "bg-appgreen text-appdarkblue font-bold"
            : "bg-slate-300/50"
        }`}
        onClick={() => handleSelected(option.option)}
      >
        {option.option}
      </div>
    );
  });

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const inputType =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setProductInfo({
      ...productInfo,
      [name]: inputType,
    });
  };

  const fetchCatSubCategory = async () => {
    try {
      const response = await axios.get(
        `${dbURL}sub-categories/category/${productInfo.categoryId}`
      );

      setSubCategories(response.data.subCategories);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.error("Error: ", err.response.data.message);
        } else {
          console.error("Unexpected Error: ", err);
        }
      }
    }
  };

  useEffect(() => {
    fetchCatSubCategory();
  }, [productInfo.categoryId]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const productData = {
        ...productInfo,
        categoryId: Number(productInfo.categoryId),
        subCategoryId: Number(productInfo.subCategoryId),
        ownerId: userProfile.id,
      };
      const response = await axios.post(`${dbURL}products`, productData);
      navigate("/home/dashboard");
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  return (
    <div className="m-4 p-4 flex flex-col gap-3 bg-slate-100 shadow-xl shadow-black/20">
      <div className="flex gap-3">
        <div className=" w-3/4">
          <Logo />
          <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Product Name"
              className=""
              value={productInfo.name}
              onChange={handleChange}
            />
            <input
              name="description"
              type="textarea"
              placeholder="Product Description"
              className=""
              value={productInfo.description}
              onChange={handleChange}
            />
            <select
              name="categoryId"
              className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none"
              value={productInfo.categoryId}
              onChange={handleChange}
            >
              <option disabled value="">
                Please select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              name="subCategoryId"
              className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none"
              value={productInfo.subCategoryId}
              onChange={handleChange}
            >
              <option disabled value="">
                Please select the sub-category
              </option>
              {subCategories.map((subCat) => (
                <option key={subCat.id} value={subCat.id}>
                  {subCat.name}
                </option>
              ))}
            </select>

            <div className="flex gap-5">
              <select
                name="condition"
                className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none w-1/2"
                value={productInfo.condition}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select the condition of your product
                </option>
                <option>New</option>
                <option>Like New</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
              </select>
              <select
                name="status"
                className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none w-1/2"
                value={productInfo.status}
                onChange={handleChange}
              >
                <option disabled value={""}>
                  Select the status of your product
                </option>
                <option>Available</option>
                <option>Sold</option>
                <option>Reserved</option>
              </select>
            </div>
            <div className="flex gap-5 w-full">
              <input
                name="location"
                type=""
                placeholder="Location"
                className="w-1/2"
                value={productInfo.location}
                onChange={handleChange}
              />
              <input
                name="price"
                type=""
                placeholder="$"
                className="w-1/2"
                value={productInfo.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-10 justify-between">
              <label className="flex gap-3 w-1/2">
                <input
                  name="negotiable"
                  type="checkbox"
                  className=""
                  checked={productInfo.negotiable}
                  onChange={handleChange}
                />
                Negotiable
              </label>
              <div className="flex gap-5 w-1/2">{deliveryElements}</div>
            </div>
            <button className="p-4 bg-appdarkblue text-appgreen font-bold mt-2 transition duration-300 ease-in-out hover:bg-appblue hover:text-appdarkblue">
              List my product
            </button>
          </form>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-5 justify-center">
          <div className="w-[180px] p-5 bg-slate-300 h-[180px] rounded-xl"></div>
          <h2 className="text-xs ">Upload product pictures</h2>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
