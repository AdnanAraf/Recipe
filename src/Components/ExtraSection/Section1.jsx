import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="bg-orange-50">
      <div>
        <h1 className="text-center text-[50px] font-poppins font-bold  mt-[50px]">
          OFFER NOW
        </h1>
      </div>
      <div class="middle2">
        <div className="flex justify-between ">
          <div className=" my-[200px]">
            <img
              className="rotated-image mx-[100px] w-[200px] h-[200px] mt-[20px] absolute"
              src="./public/sale-shape-red.png"
            ></img>
            <img className="mx-[100px] " src="./public/about-banner.png"></img>
          </div>

          <div className=" my-[240px] mx-[200px]">
            <h1 className="text-[40px] font-bold w-[450px]">
              Foodie,Burgers,and Best Pizzas{" "}
              <span className="text-orange-600">in Town!</span>
            </h1>
            <h4 className="w-[500px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam enim quasi debitis voluptate id, maiores sint fugiat
              officia asperiores laudantium. Temporibus deserunt a quasi nemo
              sapiente fugit nam accusantium facilis?Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </h4>

            <div className="feature">
              <h3>1. Delicious And Healthy Foods.</h3>
              <h3>2. Specific Family and Kids Zone.</h3>
              <h3>3. Music And Other Facilities.</h3>
              <h3>4. Faster Food Home Delivary.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
