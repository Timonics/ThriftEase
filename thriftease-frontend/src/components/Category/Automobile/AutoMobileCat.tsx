import React from "react";
import SubAutoCat from "./SubAutoCat";
import { useLocation } from "react-router-dom";

type Props = {};

const AutoMobileCat = (props: Props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search).get("subcategory");
  console.log(queryParams);
  return (
    <div>
      <SubAutoCat />
      AutoMobileCat
    </div>
  );
};

export default AutoMobileCat;
