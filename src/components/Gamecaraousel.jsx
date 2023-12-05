import React from 'react'
import { Carousel } from 'flowbite-react'
const Gamecaraousel = () => {
  return (
    <>
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
       <div className='w-6/12'>
       <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
       </div>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </>
  )
}

export default Gamecaraousel