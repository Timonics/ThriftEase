import React, { act, useEffect, useState } from "react";
import { useMyContext } from "../../../context/MyAppDataProvider";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { config } from "../../../config";
import { Product } from "../../../interfaces/thriftease-interface";
import SoldOut from "../../Badge/SoldOut";

const CategoryOutlet: React.FC = () => {
  type SubCategories = {
    id: number;
    name: string;
  };
  const { dbURL } = config;
  const location = useLocation();
  const activeLink = new URLSearchParams(location.search).get("subcategory");
  const { categories, cartProducts, setCartProducts } = useMyContext();
  const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  const path = useLocation();
  const pathArr = path.pathname.split("/");
  const pathName = pathArr[pathArr.length - 1];

  const categoryPathArr = pathName.split("-");
  categoryPathArr[1] = "&";
  const categoryName = categoryPathArr.join(" ");

  const filteredCategoryName = categories.filter(
    (category) => category.name.toLowerCase() === categoryName
  );

  const categoryElements = filteredCategoryName.map((filteredCategory) => {
    const categoryDescriptions = [
      {
        id: 1,
        desc: "Welcome to the Electronics & Gadgets section of ThriftEase! Discover a wide range of pre-owned tech items that fit your budget and lifestyle. Whether you're looking for the latest smartphones, laptops, or accessories, you'll find quality products at unbeatable prices.",
      },
      {
        id: 2,
        desc: "Discover a diverse selection of fashion items in our Clothing & Accessories category. From stylish outfits to matching accessories, find everything you need to express your unique style. Filter through our options to find the perfect look for any occasion.",
      },
      {
        id: 3,
        desc: "Transform your living space with our curated selection of Home & Living essentials. From furniture to decorative pieces, find everything you need to create a cozy and stylish home. Use our filters to easily browse through items that match your taste and elevate your space to the next level.",
      },
      {
        id: 4,
        desc: "Dive into a world of knowledge and creativity with our Books & Stationery selection. Whether you're looking for captivating reads or essential supplies for your workspace, we have it all. Filter through our collection to find the perfect book or stationery item to inspire your next idea.",
      },
      {
        id: 5,
        desc: "Gear up for your next adventure with our Sports & Outdoor collection. From fitness equipment to outdoor essentials, find everything you need to stay active and explore the great outdoors. Use the filters to discover the best gear for your sporting needs.",
      },
      {
        id: 6,
        desc: "Unleash your creativity with our Music & Instruments collection. Whether you're a seasoned musician or just starting out, explore a range of instruments and accessories to match your passion. Use the filters to find the perfect gear to create your next masterpiece.",
      },
      {
        id: 7,
        desc: "Elevate your self-care routine with our Beauty & Health collection. From skincare essentials to wellness products, discover everything you need to look and feel your best. Filter through our range to find the perfect items to enhance your beauty and well-being.",
      },
      {
        id: 8,
        desc: "Rev up your lifestyle with our Automobile category, featuring a wide selection of vehicle accessories, parts, and tools. Whether you're a car enthusiast or simply looking to enhance your ride, our collectionhas something for everyone. Use our filters to easily find the items that best suit your automotive needs.",
      },
      {
        id: 9,
        desc: "Explore our Odds & Ends category, where you'll find a treasure trove of unique items that don’t quite fit into any other category. From quirky collectibles to useful gadgets, this section is perfect forthose seeking something special or unexpected. Filter through our diverse selection to discover hidden gems that cater to every tasteand interest.",
      },
    ];
    const filteredDesc = categoryDescriptions.filter(
      (desc) => desc.id === filteredCategory.id
    );
    const categoryDesc = filteredDesc.map((desc) => (
      <p key={desc.id} className="text-sm font-light text-appdarkblue/75">
        {desc.desc}
      </p>
    ));

    const fetchCategorySubCategories = async () => {
      try {
        const response = await axios.get(
          `${dbURL}sub-categories/category/${filteredCategory.id}`
        );
        setSubCategories(response.data.subCategories);
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.error("Error: ", err.response.data.message);
          } else if (err.request) {
            console.error("Error: No response received", err.request);
          } else {
            console.error("Error: ", err.message);
          }
        } else {
          console.error("Unexpected Error: ", err);
        }
      }
    };

    useEffect(() => {
      fetchCategorySubCategories();
    }, [filteredCategory.id]);

    return (
      <div key={filteredCategory.id} className="flex flex-col gap-7 p-2">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-appgreen">
            {filteredCategory.name}
          </h1>
          {categoryDesc}
        </div>
        {/* <div className="flex gap-5 items-center justify-center p-2"></div> */}
      </div>
    );
  });

  const subCategoriesElements = subCategories.map((subCat) => (
    <NavLink
      key={subCat.id}
      to={`?subcategory=${subCat.id}`}
      className={`p-2 relative text-xs ${
        activeLink === subCat.id.toString()
          ? "border-active font-bold text-appgreen"
          : "border-inactive hover:bg-slate-300/15 text-appblue"
      }`}
    >
      {subCat.name}
    </NavLink>
  ));

  const handleAddToCart = (product: Product) => {
    setCartProducts((prevState) => {
      const existingProduct = prevState.some(
        (products) => products.id === product.id
      );
      if (!existingProduct) return [...prevState, product];
      else return prevState;
    });
  };

  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get(`${dbURL}products/category/${pathName}`);
      setCategoryProducts(response.data.products);
    } catch (err: unknown) {
      setCategoryProducts([]);
      console.error("Unexpected Error: ", err);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [pathName]);

  const categoryProductsElements = categoryProducts.map((product) => (
    <Link
      key={product.id}
      to={""}
      className="relative shadow-slate-300/75 shadow-xl w-[220px] rounded-xl"
    >
      <SoldOut />
      <img
        src=""
        alt=""
        className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
      />
      <div className="py-3 px-2 gap-2 flex flex-col product-background rounded-b-xl">
        <h2 className="font-semibold text-xs">{"Name: " + product.name}</h2>
        <p className="text-xs font-light">
          {"Description: " + product.description}
        </p>
        <p className="text-sm font-extrabold">{"Price: ₦" + product.price}</p>
        <div className="flex justify-around">
          <div className="text-[10px] py-2 px-4 rounded-lg bg-appdarkblue text-appgreen font-bold shadow-xl">
            Negotiate
          </div>
          <div
            className="text-[10px] py-2 px-4 rounded-lg bg-appdarkblue text-appgreen font-bold shadow-xl"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </Link>
  ));

  const subCategoryProducts = categoryProducts.filter(
    (product) => product.subCategoryId === Number(activeLink)
  );

  const subCategoryProductsElements = subCategoryProducts.map((product) => (
    <Link
      key={product.id}
      to={""}
      className="relative shadow-slate-300/75 shadow-xl w-[220px] rounded-xl"
    >
      <SoldOut />
      <img
        src=""
        alt=""
        className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
      />
      <div className="py-3 px-2 gap-2 flex flex-col product-background rounded-b-xl">
        <h2 className="font-semibold text-xs">{"Name: " + product.name}</h2>
        <p className="text-xs font-light">
          {"Description: " + product.description}
        </p>
        <p className="text-sm font-extrabold">{"Price: ₦" + product.price}</p>
        <div className="flex justify-around">
          <div className="text-[10px] py-2 px-4 rounded-lg bg-appdarkblue text-appgreen font-bold shadow-xl">
            Negotiate
          </div>
          <div
            className="text-[10px] py-2 px-4 rounded-lg bg-appdarkblue text-appgreen font-bold shadow-xl"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="flex flex-col gap-5">
      {categoryElements}
      <div className="flex border bg-gray-950  gap-5 items-center justify-center">
        {subCategoriesElements}
      </div>
      <div className="flex gap-7">
        {activeLink ? subCategoryProductsElements : categoryProductsElements}
      </div>
    </div>
  );
};

export default CategoryOutlet;
