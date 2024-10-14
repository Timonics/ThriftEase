import React from "react";
import { Link } from "react-router-dom";

import { MdSell } from "react-icons/md";

type Props = {};

const Logo: React.FC = (props: Props) => {
  return (
    <Link to={"/home"} className="font-black mt-1 text-appgreen flex items-center">
      <MdSell />
      ThriftEase.
    </Link>
  );
};

export default Logo;
