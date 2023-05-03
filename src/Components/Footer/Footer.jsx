import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-[200px] w-full mt-[10px]">
      <div>
        <h1 className="text-center text-white text-[30px]">SimplyRecipes</h1>
      </div>
      <div className="flex mx-[100px] justify-around">
        <div className="flex ">
          <FaFacebook className="h-[50px] w-[50px] m-[20px]  text-blue-500 " />
          <FaYoutube className="h-[50px] w-[50px] m-[20px] text-red-700" />
          <FaWhatsapp className="h-[50px] w-[50px] m-[20px] text-green-700" />
        </div>
        <div>
          <h1 className="text-white text-[25px] font-bold">Contact info</h1>
          <p className="font-semibold text-yellow-300">+73634982739</p>
          <p className="font-semibold text-yellow-300">arafadnan10@gmail.com</p>
          <p className="font-semibold text-yellow-300">
            143 Williamson Plaza,MT 09514
          </p>
        </div>
        <div>
          <h1 className="text-white text-[25px] font-bold">Opening Hour</h1>
          <p className="font-semibold text-yellow-300">
            sunday-thursday:8 A.M TO 10 P.M
          </p>
          <p className="font-semibold text-yellow-300">
            Friday:From 8 A.M To 10 P.M
          </p>
          <p className="font-semibold text-yellow-300">
            Saturday: From 10 A.M To 10 P.M
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
