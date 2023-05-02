import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegStar, FaStar } from "react-icons/fa";

const ChefDetails = () => {
  const [identify, setidentify] = useState({});
  const { id } = useParams();
  const [isButtonDisabled1, setIsButtonDisabled1] = useState(false);
  const [isButtonDisabled2, setIsButtonDisabled2] = useState(false);
  const [isButtonDisabled3, setIsButtonDisabled3] = useState(false);

  // Show an error toast

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const founddata = data.find((job) => job.id == id);
        // console.log(founddata);
        setidentify(founddata);
      });
  }, []);

  const handleClick1 = () => {
    setIsButtonDisabled1(true);
    toast.success("This is my favourite food!");
  };
  const handleClick2 = () => {
    setIsButtonDisabled2(true);
    toast.success("This is my favourite food!");
  };
  const handleClick3 = () => {
    setIsButtonDisabled3(true);
    toast.success("This is my favourite food!");
  };

  return (
    <div>
      <div className="flex border-2 h-[600px] w-[1200px] m-auto my-[20px] p-[10px] ">
        <div>
          <img
            className="h-[420px] w-[400px] m-[50px]"
            src={identify.chef_picture}
          ></img>
        </div>

        <div className="mt-[50px] ">
          <h1 className="text-[20px] font-semibold">
            <span className="font-poppins  text-[25px]">Name: </span>
            {identify.chef_Name}
          </h1>
          <p className="w-[600px] font-bold">
            Description:
            <span className="font-title font-semibold">
              {identify.description}
            </span>
          </p>
          <p className="font-semibold my-[10px]">
            Experience:{identify.years_of_experience}
          </p>
          <p className="font-semibold my-[10px]">
            Number of Recipe:{identify.Numbers_of_recipes}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center text-[40px] font-crimpson">My Recipe</h1>
        </div>
        {/**************************** Recipe No-1********************************** */}
        <div className="">
          <div className="border-2 h-[450px] w-[1300px] m-[20px] p-[30px] rounded-lg relative">
            <h1 className="text-[25px] font-semibold">
              Recipe Name:
              <span className="text-[20px] font-crimpson font-semibold">
                {identify.recipe_Name1}
              </span>
            </h1>
            <p className="font-bold text-[20px] font-poppins">
              Ingredients:
              <span className="font-thin font-title">
                <h1>{identify.ingredients1}</h1>
              </span>
            </p>
            <p className="font-poppins font-bold">
              Cooking Method:
              <span className="font-normal font-mono w-[1100px]">
                {identify.cooking_method1}
              </span>
            </p>
            <p className="font-poppins font-bold">
              Rating:
              <Rating
                placeholderRating={identify.rating1}
                emptySymbol={<FaRegStar />}
                readonly
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
              <span className="font-medium">{identify.rating1} </span>
            </p>
            <div>
              <button
                onClick={handleClick1}
                disabled={isButtonDisabled1}
                className="btn btn-accent mt-[10px] absolute bottom-[20px]"
              >
                Favourite
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
          {/**************************** Recipe No-2********************************** */}
          <div className="border-2 h-[400px] w-[800px]  m-[20px] p-[30px] rounded-lg relative">
            <h1 className="text-[25px] font-semibold">
              Recipe Name:
              <span className="text-[20px] font-crimpson font-semibold">
                {identify.recipe_Name2}
              </span>
            </h1>
            <p className="font-poppins font-bold">
              Cooking Method:
              <span className="font-normal font-mono w-[1100px]">
                {identify.cooking_method2}
              </span>
            </p>

            <p className="font-poppins font-bold">
              Rating:
              <Rating
                placeholderRating={identify.rating2}
                emptySymbol={<FaRegStar />}
                readonly
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
              <span className="font-medium"> {identify.rating2}</span>
            </p>
            <div>
              <button
                onClick={handleClick2}
                disabled={isButtonDisabled2}
                className="btn btn-accent mt-[10px] absolute bottom-[20px]"
              >
                Favourite
              </button>
            </div>
          </div>
          {/**************************** Recipe No-3********************************** */}
          <div className="border-2 h-[400px] w-[800px]  m-[20px] p-[30px] rounded-lg relative">
            <h1 className="text-[25px] font-semibold">
              Recipe Name:
              <span className="text-[20px] font-crimpson font-semibold">
                {identify.recipe_name3}
              </span>
            </h1>
            <p className="font-poppins font-bold">
              Cooking Method:
              <span className="font-normal font-mono w-[1100px]">
                {identify.cooking_method3}
              </span>
            </p>

            <p className="font-poppins font-bold">
              Rating:
              <Rating
                placeholderRating={identify.rating3}
                emptySymbol={<FaRegStar />}
                readonly
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
              <span className="font-medium"> {identify.rating3}</span>
            </p>
            <div>
              <button
                onClick={handleClick3}
                disabled={isButtonDisabled3}
                className="btn btn-accent absolute bottom-[20px]"
              >
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
