import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import EmptyDash from "./EmptyDash";
import DashBoard from "./DashBoard";

type Props = {};

const DashBoardLayout: React.FC = (props: Props) => {
  const { isAuthenticated } = useMyContext();
  return (
    <div className="h-full p-1">
      {isAuthenticated ? <DashBoard /> : <EmptyDash />}
    </div>
  );
};

export default DashBoardLayout;
