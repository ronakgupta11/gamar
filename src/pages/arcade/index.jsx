import Image from "next/image";

export default function PlayPage({gameLink}) {
  return (
    <main className="py-15"
     style={{marginBottom:"10rem"}}
    >
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

        <div className="absolute m-auto left-0   border-white right-0 top-20 h-screen lg:w-[65rem] rounded-3xl bg-slate-950 bg-clip-padding z-10">
        
          <div className="h-full w-full object-contain bg-contain rounded-lg overflow-hidden select-none">
          

          </div>

          {/* Overlay Image Container */}
          <div className="absolute top-0  left-0 right-0 bottom-0 z-10 "
          
          >
            { <iframe 
            scrolling="no"
            className="w-full h-full z-50 rounded-3xl "
            src={"https://76pdzit2im7ck2mwkpn2otlvxicfhtw7ugk6omjmy4unghkipfoa.arweave.net/_548onpDPiVpllPbp011ugRTzt-hlecxLMco0x1IeVw/"} frameborder="0">
            </iframe>}
            <Image
              src="/arcadebg.jpg"
              layout="fill"
              objectFit="cover"
              className="brightness-75 pointer-events-none opacity-40 z-10 object-contain rounded-3xl"
            >
            </Image>
          </div>
        </div>
      </div>
      {/* <div className="w-full absolute bottom-0  border-white h-[30rem] bg-purple-700 clipperHorizontal rotate-180 "></div>
        <div className="w-96 absolute top-0  border-white   bg-purple-700 clipperVertical bottom-0 "></div> */}
      {/* <div className="h-full absolute left-0 border-white w-[30rem] bg-purple-700 clipperLeft"></div> */}
    </main>
  );
}
