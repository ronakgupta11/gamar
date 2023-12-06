import React, { useEffect ,useState} from 'react'
import { Carousel } from 'flowbite-react'
import GameCard from './GameCard'
import { fetchAllGames } from '../../query/fetchGames';
const gameData = [
    {
      title: "Jump Dash",
      description: "Master the art of timing and reflexes in Jump Dash. Navigate through a series of platforms, avoid obstacles, and reach the finish line as quickly as possible. How far can you dash?",
    },
    {
      title: "Block Breaker",
      description: "Smash and break your way through endless blocks in Block Breaker. Use a bouncing ball to demolish the blocks above, collecting power-ups and achieving high scores. It's a classic arcade challenge reimagined.",
    },
    {
      title: "Color Matcher",
      description: "Test your memory and color recognition skills in Color Matcher. Match the displayed color by tapping on the corresponding buttons before time runs out. How many levels can you conquer in this vibrant challenge?",
    }
  ];
const Gamecaraousel = () => {

    
  return (
    <>
     <div 
      style={{height:"30rem"}}
     className=" ">
       <Carousel slideInterval={3000}>
       {
        gameData.map(
            (data,index)=>{
               
                return (
                    <div
                     className='flex justify-center align-middle gap-12'>
                     <GameCard description={data.description} title={data.title}  image={data.image||"/DefaultGameThumbnail.jpg"}/>
                     <GameCard description={data.description} title={data.title} image={data.image||"/DefaultGameThumbnail.jpg"}/>
                     <GameCard description={data.description} title={data.title} image={data.image||"/DefaultGameThumbnail.jpg"}/>
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