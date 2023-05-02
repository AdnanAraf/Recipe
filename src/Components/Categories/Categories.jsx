import React, { useEffect, useState } from "react";
import ShowCategories from "../CategoriesItem/ShowCategories";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setcategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-[50px] font-bold mt-[50px] font-crimpson">
          Chef
        </h1>

        {categories.map((item) => (
          <ShowCategories key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
