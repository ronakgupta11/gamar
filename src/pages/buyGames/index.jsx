import Gamecaraousel from "@/components/Gamecaraousel";
import React from "react";
import { useState,useEffect } from "react";
import GameCard from "@/components/GameCard";
import { fetchAllGames } from "../../../query/fetchGames";
const gameData = [
  {
    title: "Jump Dash",
    description:
      "Master the art of timing and reflexes in Jump Dash. Navigate through a series of platforms, avoid obstacles, and reach the finish line as quickly as possible. How far can you dash?",
  },
  {
    title: "Block Breaker",
    description:
      "Smash and break your way through endless blocks in Block Breaker. Use a bouncing ball to demolish the blocks above, collecting power-ups and achieving high scores. It's a classic arcade challenge reimagined.",
  },
  {
    title: "Color Matcher",
    description:
      "Test your memory and color recognition skills in Color Matcher. Match the displayed color by tapping on the corresponding buttons before time runs out. How many levels can you conquer in this vibrant challenge?",
  },
];

const Index = () => {
  
  const [games,setGames]=useState([])
    useEffect(()=>{
        const getGames = async ()=>{
          const data= await fetchAllGames()
          setGames(data)
          console.log("game result",data[0].creatorId)

        }
        getGames()
    },[])

  return (
    <>
      <div className="pt-24  text-center text-3xl font-mono">Trending Titles</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 mt-6 pt-2   gap-6 ">
        {games.map((data, index) => {
          return (
            <div className="flex justify-center align-middle gap-12  border-" key={index}>
              <GameCard
              creatorAddress={data.creatorId}
                description={data.description}
                title={data.title}
                image={"" || "/DefaultGameThumbnail.jpg"}
        
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
