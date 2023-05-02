import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const [identify, setidentify] = useState({});
  const { id } = useParams();
  //   console.log("Adnan Araf", id);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const founddata = data.find((job) => job.id == id);
        console.log(founddata);
        setidentify(founddata);
      });
  }, []);

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
          <div className="border-2 h-[400px] w-[1300px] m-[20px] p-[30px] rounded-lg">
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
              <span className="font-medium"> {identify.rating1}</span>
            </p>
          </div>
          {/**************************** Recipe No-2********************************** */}
          <div className="border-2 h-[400px] w-[800px]  m-[20px] p-[30px] rounded-lg">
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
              <span className="font-medium"> {identify.rating2}</span>
            </p>
          </div>
          {/**************************** Recipe No-3********************************** */}
          <div className="border-2 h-[400px] w-[800px]  m-[20px] p-[30px] rounded-lg">
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
              <span className="font-medium"> {identify.rating3}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
