import Image from "next/image";

export default function PlayPage() {
  return (
    <main className="py-12">
      {/* <Image src={"/border.png"} width={199} height={199} /> */}
      <Image
        src="/joystickNew.png"
        width={150}
        height={30}
        className="  brightness-75 absolute -bottom-10 ml-56  z-20"
      />
      <Image
        src="/joystickNew.png"
        width={150}
        height={30}
        className="  absolute -bottom-10  brightness-75 select-none touch-none none  right-0 mr-56  z-20"
      />


      <div className="w-full h-screen   rounded-lg bg-slate-950 bg-clip-padding -z-20 py-12">

        <div className="absolute m-auto left-0   border-white right-0 top-20 h-[40rem] w-[50rem] rounded-3xl bg-slate-950 bg-clip-padding z-10">
          {/* Game Content Container */}
          <div className="h-full w-full object-contain bg-contain rounded-lg overflow-hidden select-none">
            {/* Your game content goes here */}
            <div className="absolute top-0 left-0 right-0 bottom-0">
              {/* Add your game elements here */}
            </div>
          </div>

          {/* Overlay Image Container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
            <Image
              src="/arcadebg.jpg"
              layout="fill"
              objectFit="cover"
              className="brightness-75 pointer-events-none opacity-50 z-10 object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full absolute bottom-0  border-white h-[30rem] bg-purple-700 clipperHorizontal rotate-180 "></div>
        <div className="w-96 absolute top-0  border-white   bg-purple-700 clipperVertical bottom-0 "></div> */}
      {/* <div className="h-full absolute left-0 border-white w-[30rem] bg-purple-700 clipperLeft"></div> */}
    </main>
  );
}
