import React from "react";

// import banner2 from "../../../assets/banner2.jpg";
// import banner3 from "../../../assets/banner3.jpg";

const Template = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex bg-yellow-50 justify-end">
            <div className="mt-[250px] mx-[20px]">
              <h1 className="font-poppins font-bold text-[40px]">
                Super Delicious Noodles in Town!
              </h1>
              <p className="font-title font-bold text-[25px] ">
                Food is Any substance Consumed To provide Nutritional Support
                For Any Organism
              </p>
            </div>
            <div>
              <img
                src="./public/banner-1.jpg"
                className="w-[800px] h-[600px] mx-[100px]"
              />
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/************************** SLIDER2************************************************************* */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex bg-red-100 justify-end">
            <div className="mt-[250px] mx-[20px]">
              <h1 className="font-poppins font-bold text-[40px]">
                Super Delicious Pizza in Town!
              </h1>
              <p className="font-title font-bold text-[25px] ">
                Food is Any substance Consumed To provide Nutritional Support
                For Any Organism
              </p>
            </div>
            <div>
              <img
                src="./public/banner-2.jpg"
                className="w-[800px] h-[600px] mx-[100px]"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/************************** SLIDER2************************************************************* */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex bg-green-100 justify-end">
            <div className="mt-[250px] mx-[20px]">
              <h1 className="font-poppins font-bold text-[40px]">
                Super Delicious Burger in Town!
              </h1>
              <p className="font-title font-bold text-[25px] ">
                Food is Any substance Consumed To provide Nutritional Support
                For Any Organism
              </p>
            </div>
            <div>
              <img
                src="./public/banner-3.jpg"
                className="w-[800px] h-[600px] mx-[100px]"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
