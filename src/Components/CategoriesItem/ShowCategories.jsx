import React from "react";
import { Link } from "react-router-dom";

const ShowCategories = ({ item }) => {
  const {
    id,
    chef_picture,
    chef_Name,
    years_of_experience,
    Numbers_of_recipes,
    likes,
  } = item;

  return (
    <div>
      <div className="flex m-[20px] justify-between border-2 h-[400px] w-[800px] p-[50px] mx-[420px]">
        <div>
          <img className="h-[300px] w-[400px]" src={chef_picture}></img>
        </div>

        <div className="mt-[50px] ">
          <h1 className="text-[20px]">
            <span className="font-poppins  text-[25px]">Name: </span>
            {chef_Name}
          </h1>
          <p>Experience:{years_of_experience}</p>
          <p>Number of Recipe:{Numbers_of_recipes}</p>

          <Link to={`/item/${id}`}>
            <button className="btn btn-success mt-[10px]">View Details</button>
          </Link>
        </div>
        <h1></h1>
      </div>
    </div>
  );
};

export default ShowCategories;
