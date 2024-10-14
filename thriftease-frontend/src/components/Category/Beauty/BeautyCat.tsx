import React from "react";
import SubBeautyCat from "./SubBeautyCat";
import { useLocation } from "react-router-dom";

type Props = {};

const BeautyCat = (props: Props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search).get("subcategory");
  console.log(queryParams);
  return (
    <div>
      <SubBeautyCat />
      BeautyCat
    </div>
  );
};

export default BeautyCat;
