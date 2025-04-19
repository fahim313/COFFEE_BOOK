import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted  mt-8">
  {categories.map((category) => (
    <NavLink
      key={category.category}
      to={`/category/${category.category}`}
      role="tab"
      className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''} `}
    >
      {category.category}
    </NavLink>
  ))}
</div>

  );
}
