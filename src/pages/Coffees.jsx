import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from '../Components/Cards/Cards';

export default function Coffees() {
  const data=useLoaderData();
  const[ coffees,setCoffees]=useState(data);
  const handleSort=(sortBy)=>{
    if(sortBy=='popularity'){
        const sorted=[...data].sort((a,b)=>b.popularity-a.popularity)
        setCoffees(sorted);
    }
    else if(sortBy=='rating'){
      const sorted=[...data].sort((a,b)=>b.rating-a.rating)
      setCoffees(sorted);
    }
  }
  return (
   <>
   <div className='flex justify-between items-center px-32 mt-14 '>
    <div>
      <h1 className='text-3xl font-thin'>
      
      
      Sort Coffee&apos;s by popularity and Rating-&gt;
      </h1>
      </div>
      
      <div className="flex flex-wrap gap-4 my-4">
  <button onClick={()=>handleSort('popularity')}
   className="btn btn-warning w-24 h-6 text-sm text-center rounded-none">
    Popularity
  </button>
  <button onClick={()=>handleSort('rating')}
  className="btn btn-warning w-24 h-6 text-sm text-center rounded-none">
    Rating
  </button>
</div>


   </div>
   
   <div className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-32">
             {coffees.map((coffee) => (
               <Cards key={coffee.id} coffee={coffee}></Cards>
             ))}
           </div>
   </>
  )
}
