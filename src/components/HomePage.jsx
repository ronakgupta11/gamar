import { Button } from "flowbite-react"
import Image from "next/image"
import gamebg from '../../public/gameBG.jpg'
import Link from "next/link"
export function HomePage(){

    return (
        <>

        <div 
         style={{
            backgroundImage: `url('/gameBGtest.jpg')` ,
            backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
         
        }}
        className="text-white min-h-screen pt-16 gap-5  flex flex-col px-4 pb-4 -z-20     bg-contain justify-center items-center" > 
            
            <div className="flex h-40 lg:py-10 text-7xl flex-col px-2 text-center font-bold">

            <div>Revive the</div> 
            <div><span className="text-rose-500">Arcade</span> Rush</div>
            </div>
            <Button className=" lg:my-8 w-24 h-min whitespace-nowrap !bg-rose-600 hover:!bg-rose-700 hover:!cursor-pointer" ><Link href="/buyGames">Play Now</Link></Button>
        </div>
        </>
    )

} 