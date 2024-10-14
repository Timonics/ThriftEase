import React from "react";

import googleLogo from "../../assets/googleLogo.png";
import { FaFacebook } from "react-icons/fa";

type Props = {};

const Oauth: React.FC = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 px-2 mb-1">
      <div className="p-3 w-full text-center border-2 border-slate-200 bg-white font-semibold flex gap-3 justify-center items-center">
        <img src={googleLogo} alt="google logo" width={27} height={27} />
        Sign in with Google
      </div>
      <div className="p-3 border-2 border-[#c3d0f6] bg-[#3b5998] w-full text-center text-[#f7f7f7] font-semibold flex gap-3 justify-center items-center">
        <FaFacebook size={18} />
        Sign in with Facebook
      </div>
    </div>
  );
};

export default Oauth;
