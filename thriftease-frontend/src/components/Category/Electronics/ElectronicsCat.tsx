import React, { useState } from "react";
import SubElectronicsCat from "./SubElectronicsCat";

import { useLocation } from "react-router-dom";
import axios from "axios";
import { config } from "../../../config";

type Props = {};

const ElectronicsCat = (props: Props) => {
  /* const location = useLocation();
  const queryParams = new URLSearchParams(location.search).get("subcategory");
  console.log(queryParams); */

  const api = config.dbURL

  const [categoryProducts, setCategoryProducts] = useState<[]>([]);

  const getElectronicsProducts = async () => {
    try {
      const categoryResponse = await axios.get(`${api}products`)
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <SubElectronicsCat />
      ElectronicsCat
    </div>
  );
};

export default ElectronicsCat;
