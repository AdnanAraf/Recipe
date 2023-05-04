import React from "react";
import LazyLoad from "react-lazy-load";
import "./ShowCategories.css";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ShowCategories = ({ item }) => {
  console.log(item);
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
      <div className="lg:flex m-[20px] lg:justify-between border-2 lg:h-[400px] h-[600px] lg:w-[800px] p-[50px] lg:mx-[420px]">
        <LazyLoad>
          <img className="h-[300px] w-[400px]" src={chef_picture}></img>
        </LazyLoad>

        <div className="mt-[50px] ">
          <h1 className="text-[20px]">
            <span className="font-poppins  text-[25px]">Name: </span>
            {chef_Name}
          </h1>
          <p>Experience:{years_of_experience}</p>
          <p>Number of Recipe:{Numbers_of_recipes}</p>
          <p>Like:{likes}</p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-success mt-[10px]">View Recipes</button>
          </Link>
        </div>
        <h1></h1>
      </div>
    </div>
  );
};

export default ShowCategories;
