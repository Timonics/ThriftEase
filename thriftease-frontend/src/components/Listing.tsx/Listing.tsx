import React, { useState } from "react";
import ListForm from "./ListForm";

type Props = {};

const Listing: React.FC = (props: Props) => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setFormIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1.5">
        <h1 className="text-5xl font-extrabold text-appdarkblue">
          Sell your item
        </h1>
        <p className="font-light text-sm text-appdarkblue/75 leading-5">
          Ready to turn your pre-loved items into cash? Whether it’s a gadget
          you no longer need, clothes that don’t fit, or furniture taking up
          space, <span className="font-bold text-appgreen">ThriftEase.</span>{" "}
          makes it easy to list and sell your items to a wide audience. Simply
          upload photos, set your price, and add a description—your next buyer
          could be just a click away!
        </p>
      </div>
      {formIsOpen ? (
        <ListForm />
      ) : (
        <button onClick={handleClick} className="text-xs mt-10 bg-gray-950 font-bold p-4 text-appgreen mx-4 hover:bg-appblue hover:text-appdarkblue transition ease-in-out duration-500">
          Start earning now by giving your items a second life and connecting
          with buyers who are looking for great deals.
        </button>
      )}
    </div>
  );
};

export default Listing;
