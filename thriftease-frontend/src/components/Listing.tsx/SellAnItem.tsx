import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import ListAuthMsg from "./ListAuthMsg";
import Listing from "./Listing";

type Props = {};

const SellAnItem: React.FC = (props: Props) => {
  const { isAuthenticated } = useMyContext();
  return (
    <div className="h-full p-1">
      {isAuthenticated ? <Listing /> : <ListAuthMsg />}
    </div>
  );
};

export default SellAnItem;
