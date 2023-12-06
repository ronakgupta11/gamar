import React, { useEffect ,useState} from 'react'
import { Carousel } from 'flowbite-react'
import GameCard from './GameCard'
import { fetchAllGames } from '../../query/fetchGames';
import CaraouselCard from './CaraouselCard';
const gameData = [
    {
      title: "Jump Dash",
      description: "Master the art of timing and reflexes in Jump Dash. ",
    },
    {
      title: "Block Breaker",
      description: "Smash and break your way through endless blocks in Block Breaker. ",
    },
    {
      title: "Color Matcher",
      description: "Test your memory and color recognition skills in Color Matcher.",
    }
  ];
const Gamecaraousel = () => {

    
  return (
    <>
     <div 
      style={{height:"30rem"}}
     className="h-66 sm:h-64 xl:h-80 2xl:h-96">
       <Carousel slideInterval={5000}>
       {
        gameData.map(
            (data,index)=>{
                console.log(data)               
                return (
                    <div
                     className='flex justify-center align-middle gap-12' key={index}>
                     <CaraouselCard description={data.description} title={data.title}  image={data.image||"/DefaultGameThumbnail.jpg"}/>
                     <CaraouselCard description={data.description} title={data.title} image={data.image||"/gameTh2.jpg"}/>
                     <CaraouselCard description={data.description} title={data.title} image={data.image||"/gameTh3.jpg"}/>
                     </div>
                     )
               
            }
        )
      } 
      
      </Carousel> 
      
    </div>
    </>
  )
}

export default Gamecaraousel