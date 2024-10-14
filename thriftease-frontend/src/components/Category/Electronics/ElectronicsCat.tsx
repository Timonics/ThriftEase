import React from "react";
import SubElectronicsCat from "./SubElectronicsCat";

import { useLocation } from "react-router-dom";

type Props = {};

const ElectronicsCat = (props: Props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search).get("subcategory");
  console.log(queryParams);
  return (
    <div>
      <SubElectronicsCat />
      ElectronicsCat
    </div>
  );
};

export default ElectronicsCat;
