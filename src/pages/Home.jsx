import React from 'react'
import Banner from '../Components/Banner/Banner'
import Heading from '../Components/Heading/Heading'
import Catagories from '../Components/Categories/Categories'
import { Outlet, useLoaderData } from 'react-router-dom'


export default function Home() {
const categories=useLoaderData()
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading 
      title={'Browse Coffees By Catagory'}
      subtitle={'Choose you desired coffee catagory to browse through specific coffees that fit your taste.'}
      ></Heading>
      {/* Catagories  tab section*/}
      <Catagories categories={categories} ></Catagories>
      {/* Dynamic Nasted Component */}
      <Outlet></Outlet>
    </div>
  )
}
