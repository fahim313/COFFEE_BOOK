import React from 'react'

export default function Heading({ title, subtitle }) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-md mt-2">{subtitle}</p>
    </div>
  )
}

