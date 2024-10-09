import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between m-4">
      <Link to={""} className="italic">
        ThriftEase
      </Link>
      <div className="space-x-4 font-light">
        <Link to={""}>Log in</Link>
        <Link to={""}>Register</Link>
        <Link to={""}>Cart</Link>
      </div>
    </div>
  );
};

export default Nav;
