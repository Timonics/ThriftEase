import React, { ChangeEvent, FormEvent, useState } from "react";
import Logo from "../Badge/Logo";
import { ProductInfo } from "../../interfaces/thriftease-interface";

const ListForm: React.FC = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    categoryId: "",
    subCategoryId: "",
    price: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const categoryList = ["Electronics & Gadgets"]
  const subCategoryList = ["Smartphones",
    "Laptops",
    "Tablets",
    "Accessories",
    "Cameras & Photography",
    "Gaming Consoles"]

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1.5">
        <h1 className="text-5xl font-bold text-appdarkblue">Sell your item</h1>
        <p className="font-light text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta earum
          blanditiis quo, cumque id nemo similique vero magni quidem rem nisi
          sapiente et minus molestias praesentium, vel molestiae. Porro,
          voluptatibus.
        </p>
      </div>
      <div className="m-4 p-4 flex gap-3 bg-slate-100 shadow-xl shadow-black/20">
        <div className=" w-3/4">
          <Logo />
          <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className=""
              value={productInfo.name}
              onChange={handleChange}
            />

            <input
              name="categoryId"
              type=""
              placeholder=""
              className=""
              value={productInfo.categoryId}
              onChange={handleChange}
            />
            <select
              name="subCategoryId"
              type=""
              placeholder="Please"
              className=""
              value={productInfo.subCategoryId}
              onChange={handleChange}
            >
              <option></option>
              <option>as</option>
              <option>as</option>
            </select>
            <input
              name="price"
              type=""
              placeholder=""
              className=""
              value={productInfo.price}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-4 bg-appdarkblue text-appgreen font-bold mt-2"
            >
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
