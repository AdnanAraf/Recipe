import React from "react";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="bg-yellow-50">
      <div>
        <h1 className="text-center text-[40px] font-bold font-poppins">
          Special Food
        </h1>
      </div>
      <div className="grid">
        <div className="grid1">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] font-poppins font-bold">Meal</h1>
            <p className="font-title text-[18px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>
          <div className="img1">
            <img src="promo-1.png"></img>
          </div>
        </div>

        {/******************* **********************Grid2********************************************** */}

        <div className="grid2">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] font-poppins font-bold">Hamburgers</h1>
            <p className="font-title text-[18px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>

          <div className="img1">
            <img src="promo-2.png"></img>
          </div>
        </div>

        {/******************* **********************Grid3********************************************** */}

        <div className="grid3">
          <div className="icon"></div>
          <div className="header2">
            <h1 className="text-[30px] font-poppins font-bold">FRENCH FRY</h1>
            <p className="font-title text-[18px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit illo et aspernatur, temporibus atque facere ducimus
              consequatur, deleniti error ipsam rerum eos modi asperiores
              maxime, fugiat placeat ipsa recusandae voluptas quia ut impedit
              vel excepturi! Ut deleniti veniam quaerat.
            </p>
          </div>
          <div className="img1">
            <img src="promo-3.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
