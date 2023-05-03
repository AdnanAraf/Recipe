import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black lg:h-[200px] w-full mt-[10px] overflow-hidden">
      <div>
        <h1 className="text-center text-white text-[30px]">SimplyRecipes</h1>
      </div>
      <div className="lg:flex mx-[100px] justify-around">
        <div className="flex ">
          <FaFacebook className="lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px]  text-blue-500 " />
          <FaYoutube className=" lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px] text-red-700" />
          <FaWhatsapp className="lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px] text-green-700" />
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
