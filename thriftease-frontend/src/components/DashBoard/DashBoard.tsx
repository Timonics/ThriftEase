import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import EmptyDash from "./EmptyDash";

type Props = {};

const DashBoard: React.FC = (props: Props) => {
  const { isAuthenticated } = useMyContext();
  return (
    <div className="h-full p-1">
      {isAuthenticated ? <div></div> : <EmptyDash />}
    </div>
  );
};

export default DashBoard;
