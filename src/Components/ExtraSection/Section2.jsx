import React from "react";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="bg-yellow-50 overflow-hidden">
      <div>
        <h1 className="text-center text-[40px] font-bold font-poppins">
          Special Food
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:mt-[5rem] lg:ml-[3rem] lg:m-[10px] m-[10px] mt-[20px]">
        <div className="grid1 lg:h-[650px] lg:w-[450px] bg-white h-[650px] w-full ">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] text-center font-poppins font-bold mt-[50px]">
              Meal
            </h1>
            <p className="font-title text-[18px] lg:w-full w-[300px] text-center mt-[60px] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>
          <div className="img1 ">
            <img className="lg:mt-[50px] lg:mx-[60px]" src="promo-1.png"></img>
          </div>
        </div>

        {/******************* **********************Grid2********************************************** */}

        <div className="grid2  bg-white">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] text-center font-poppins font-bold mt-[50px]">
              Hamburgers
            </h1>
            <p className="font-title text-[18px] lg:w-full w-[300px] text-center mt-[60px] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>

          <div className="img1">
            <img className="mt-[50px] mx-[60px]" src="promo-2.png"></img>
          </div>
        </div>

        {/******************* **********************Grid3********************************************** */}

        <div className="grid3  bg-white">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] text-center font-poppins font-bold mt-[50px]">
              FRENCH FRY
            </h1>
            <p className="font-title text-[18px] lg:w-full w-[300px] text-center mt-[60px] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>
          <div className="img1">
            <img className="mt-[50px] mx-[60px]" src="promo-3.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
