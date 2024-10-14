import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Explore: React.FC = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center auth-background h-[220px]">
      <div className="text-center">
        <h1 className="text-[38px] font-bold text-green-700">
          Explore Our Categories
        </h1>
        <p className="text-[13px] text-appdarkblue/75">
          Browse through our wide range of categories
        </p>
      </div>
      <Link
        to={"category"}
        className="px-7 py-1 bg-appdarkblue text-appgreen font-semibold hover:text-appblue transition duration-300 ease-linear"
      >
        Explore
      </Link>
    </div>
  );
};

export default Explore;
