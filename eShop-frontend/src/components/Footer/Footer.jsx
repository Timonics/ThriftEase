import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col p-5 gap-10 items-center pt-5 bg-slate-100">
      <Link className="p-2 border rounded-xl w-fit mr-auto bg-[#2ECC71] font-bold">ThriftEase</Link>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-3 justify-between w-[50%] mx-4 ">
          <h3 className="text-lg font-bold text-[#2ECC71]">About Us</h3>
          <p className="text-sm font-light text-[#34495E] font-inter">
            At ThriftEase, we believe that every item has a story and a second
            chance. Our platform connects people looking to buy and sell
            preloved items in a simple, safe, and sustainable way. Whether
            you're decluttering your home or hunting for hidden treasures,
            ThriftEase is the marketplace where second-hand goods find new
            value. Our mission is to promote sustainability and community by
            giving new life to used products. By making buying and selling easy,
            we empower individuals to reduce waste and support a circular
            economy. ThriftEase is more than just a platform—it's a movement
            toward responsible consumption. Join us in creating a marketplace
            where you can make a difference with every transaction.
          </p>
        </div>
        <div className="flex flex-col ml-auto mr-32 text-sm gap-3 font-medium">
          <Link>How it works</Link>
          <hr className="mr-2"/>
          <Link>FAQs</Link>
          <hr className="mr-2"/>
          <Link>Contact Support</Link>
        </div>
      </div>
      <div className="flex gap-7 text-4xl text-[#2ECC71]">
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaXTwitter />
        </Link>
        <Link>
          <FaLinkedin />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5 text-sm">
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Cookie Policy</Link>
        </div>
        <p className="text-[11px] font-light">
          © 2024 ThriftEase. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
