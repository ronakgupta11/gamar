import { useStream } from "@livepeer/react";
import { Player, Broadcast } from "@livepeer/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { RouteLoader } from "next/dist/client/route-loader";
function WatchStream() {
  const router = useRouter();
  let id =(router.query.streamId) ? router.query.streamId : "" ;

 
  
useEffect(()=>{
id = router.query.streamId


},[router])

console.log("id",id)
    const { data: asset } = useStream(id);
    

    return (
      <div className="mt-16 ">
        <Player
            title={asset?.name}
            playbackId={asset?.playbackId}
    
            
            />
      </div>
    );
  
  // const {data:asset,isError,error} = useStream(id)
  // console.log(asset)
  // const {id} =  useLoaderData();

  return "";
}

export default WatchStream;
