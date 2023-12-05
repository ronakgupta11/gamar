import { Button } from "flowbite-react"

export function HomePage(){

    return (
        <>

        <div className="text-white min-h-screen pt-16 gap-5 border-2 flex flex-col px-4 pb-4 -z-20     bg-contain justify-center items-center" > 
            
            <div className="flex h-40  text-7xl flex-col px-2 text-center">

            <div>Revive the</div> 
            <div><span className="text-rose-500">Arcade</span> Rush</div>
            </div>
            <Button className=" w-24 h-min whitespace-nowrap !bg-rose-600 hover:!bg-rose-700 hover:!cursor-pointer">Play Now</Button>
        </div>
        </>
    )

} 