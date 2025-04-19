import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

export default function CoffeeCards() {
  const data = useLoaderData(); 
  console.log(data);
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);

  return (
    <>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-32">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
      {/* View All Button */}
      <div className="px-32">
        <button
          className="btn btn-warning rounded-md mt-4"
          onClick={() => navigate("/Coffees")}
        >
          View All
        </button>
      </div>
    </>
  );
}
