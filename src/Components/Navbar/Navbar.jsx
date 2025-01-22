import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
    <div className="container flex justify-between items-center h-16 mx-auto">
      <h2 className="flex items-center p-2 text-lg font-semibold" aria-label="Back to homepage">
        COFFEE_BOOK
      </h2>
      <nav>
        <ul className="hidden space-x-6 md:flex">
          <li>
            <NavLink to="/" className="flex items-center px-4" activeClassName="font-bold">Home</NavLink>
          </li>
          <li>
            <NavLink to="/coffees" className="flex items-center px-4" activeClassName="font-bold">Coffees</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="flex items-center px-4" activeClassName="font-bold">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
      <button className="flex md:hidden p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
  
  
  )
}
