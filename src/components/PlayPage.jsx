import Image from "next/image";



export function PlayPage(){


    return(
        <>    
        {/* <Image src={"/border.png"} width={199} height={199} /> */}
        <div className="w-full absolute top-0  border-white h-[30rem]  bg-purple-700 clipperHorizontal "></div>
        <div className="w-full absolute bottom-0  border-white h-[30rem] bg-purple-700 clipperHorizontal rotate-180 "></div>
        <div className="w-[h-screen] absolute top-0  border-white h-[50rem]  bg-purple-700 clipperVertical "></div>
<div class="h-full absolute left-0 border-white w-[30rem] bg-purple-700 clipperLeft"></div>
        </>
    
    )


}