import { useStream } from '@livepeer/react';
import { Player,Broadcast } from '@livepeer/react';
import { useRouter } from 'next/router';


    




function WatchStream() {

    const router = useRouter()
    const id  = router.query.streamId
    const title = router.query.title
    console.log(id, title)
    const {data:asset,isError,error} = useStream(id)

    // const {id} =  useLoaderData();
    // const {data:asset,isError,error} = useStream(id)
    // console.log(asset)


  return (
    <div className='mt-16 border-white border-2'>
        <Player
        title={asset?.name}
        playbackId={asset?.playbackId}

        
        />

        
    </div>
  )
}


export default WatchStream