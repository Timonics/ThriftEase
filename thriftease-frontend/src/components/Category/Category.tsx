import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Category: React.FC = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-appdarkblue font-extrabold">
          Shop items by categories
        </h1>
        <p className="text-sm text-appdarkblue/65 font-light pr-4">
          At{" "}
          <span className="font-bold text-appgreen text-base">ThriftEase.</span>
          , we've organized a wide range of categories to make it easy for you
          to find exactly what you're looking for. Whether you’re hunting for
          something specific or just browsing, our categories help you discover
          amazing deals on quality second-hand items. Dive into each category
          and explore a world of thrifted treasures!
        </p>
      </div>
      <div className="flex flex-col gap-10 p-4 items-center">
        <Link
          to="/categories/electronics-and-gadgets"
          className="w-full category-background shadow-xl"
        >
          <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-2xl font-bold">Electronics & Gadgets</h2>
            <p className="text-[11px] font-light">
              Discover a range of pre-loved electronics, from smartphones and
              laptops to tablets and accessories. Tech doesn’t have to break the
              bank!
            </p>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link
            to="/categories/fashion-and-apparels"
            className="w-2/5 category-background shadow-xl"
          >
            <img src="" alt="" className=" w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="text-2xl font-bold">Fashion & Apparel </h2>
              <p className="text-[11px] font-light">
                Stay stylish on a budget! Find great deals fashion and
                accessories for men, women, and children in this category.
              </p>
            </div>
          </Link>
          <Link
            to="/categories/home-and-living"
            className="w-3/5 category-background shadow-xl"
          >
            <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="text-2xl font-bold">Home & Living</h2>
              <p className="text-[11px] font-light">
                Spruce up your space with second-hand furniture, home décor,
                kitchenware, and more. Make your house feel like home without
                overspending.
              </p>
            </div>
          </Link>
        </div>
        <Link
          to="/categories/books-and-stationery"
          className="w-full category-background shadow-xl"
        >
          <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-2xl font-bold">Books & Stationery</h2>
            <p className="font-light text-[11px]">
              Get your hands on novels, textbooks, notebooks, and all sorts of
              stationery. Perfect for students, readers, and stationery lovers
              alike!
            </p>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link
            to="/categories/sports-and-outdoor"
            className="w-2/3 category-background shadow-xl"
          >
            <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="text-2xl font-bold">Sports & Outdoor</h2>
              <p className="text-[11px] font-light">
                Gear up for your next adventure! Browse through sports
                equipment, camping gear, fitness tools, and other outdoor
                essentials.
              </p>
            </div>
          </Link>
          <Link
            to="/categories/music-and-instruments"
            className="w-1/3 category-background shadow-xl"
          >
            <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="font-bold text-2xl">Music & Instruments</h2>
              <p className="text-[11px] font-light">
                Explore our collection of musical instruments and gear at thrift
                prices.
              </p>
            </div>
          </Link>
        </div>
        <Link
          to="/categories/beauty-and-health"
          className="w-full category-background shadow-xl"
        >
          <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
          <div className="flex flex-col gap-1 p-4">
            <h2 className="font-bold text-2xl">Beauty & Health</h2>
            <p className="text-[11px] font-light">
              Discover great deals on beauty products, skincare, grooming tools,
              and wellness essentials to keep you looking and feeling your best.
            </p>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link
            to="/categories/automobiles"
            className="category-background shadow-xl"
          >
            <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="font-bold text-2xl">Automobiles & Accessories</h2>
              <p className="text-[11px] font-light">
                Find used cars, motorbikes, auto parts, and vehicle accessories
                at unbeatable prices. Drive your way to a great deal!
              </p>
            </div>
          </Link>
          <Link
            to="/categories/miscellaneous"
            className="category-background shadow-xl"
          >
            <img src="" alt="" className="w-full h-[100px] bg-appdarkblue" />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="font-bold text-2xl">Miscellaneous</h2>
              <p className="text-[11px] font-light">
                Not sure where to look? This category features a variety of
                unique items that don't quite fit into the usual boxes.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
