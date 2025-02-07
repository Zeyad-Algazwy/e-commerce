// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import slide from "../../assets/images/slider-image-3.jpeg"
import slide1 from "../../assets/images/slider-image-2.jpeg"
import slide2 from "../../assets/images/slider-image-1.jpeg"
import axios from 'axios'
import Categories from '../Subcateg/Categories'

export default function Home() {

 let [categories, setCategories] =useState(null)


  async function getCategories(){

  let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  setCategories(data.data)
  console.log(data.data);
  
  }


  useEffect(()=>{
    getCategories();
  },[])
  return (
    <>
    
    <div>
  <div id="default-carousel" className="relative w-[80%] mx-auto" data-carousel="slide">
    {/* Carousel wrapper */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {/* Item 1 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={slide} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      {/* Item 2 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={slide1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      {/* Item 3 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={slide2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      {/* Item 4 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={slide} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      {/* Item 5 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={slide2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
    </div>
    {/* Slider indicators */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
    </div>
    {/* Slider controls */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
</div>



<div className="w-[80%] mx-auto">
  
<div className="grid md:grid-cols-5 gap-12">

  {categories !== null ? categories.map((category)=>{return <Categories key={category._id} category={category}/>}) :""}

</div>
</div>

    
    
    
    
    </>
  )
}
