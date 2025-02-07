/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Categories({category}) {
  return (
    <>
    
<div>
    <img src={category.image} alt="" />
    
    <p>{category.name}</p>
  </div>
    
    
    
    </>
  )
}
