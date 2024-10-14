import React from "react";

type Props = {};

const SoldOut: React.FC = (props: Props) => {
  return (
    <h1 className="absolute right-0 top-2 px-2 py-1 bg-appdarkblue text-appgreen text-xs font-medium clip-right">
      SOLD OUT
    </h1>
  );
};

export default SoldOut;
