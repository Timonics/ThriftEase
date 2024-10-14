import React from "react";
import { MdSell } from "react-icons/md";

type Props = {};

const FirstPage: React.FC = (props: Props) => {
  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="text-[110px] font-extrabold text-[#039832f9] flex items-center">
        <MdSell /> ThriftEase.
      </div>
    </div>
  );
};

export default FirstPage;
