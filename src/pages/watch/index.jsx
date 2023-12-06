import { useStream } from "@livepeer/react";
import { Player, Broadcast } from "@livepeer/react";
import { useRouter } from "next/router";
import { useState } from "react";

function WatchStream() {
  const router = useRouter();
  const id =(router.query.streamId);

  const title = router.query.title;
  console.log(id, title);


    const { data: asset, isError, error } = useStream(id);
    console.log(asset);

    return (
      <div className="mt-16 border-white border-2">
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
