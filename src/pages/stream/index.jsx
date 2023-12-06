"use client";
import { useEffect, useRef, useState } from "react";
import { useCreateStream } from "@livepeer/react";
import copy from "copy-to-clipboard";
import {PiClipboardTextLight} from "react-icons/pi"
import create from "@/lib/createStream";
import { useActiveAddress } from "arweave-wallet-kit";
import {
  Button,
  Label,
  Spinner,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import StreamCard from "@/components/StreamCard"
import userStream from "@/lib/generatedStream";
import LiveStream from "@/lib/liveStreams";
export default function Stream() {
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [streamThumbnailUrl, setStreamThumbnailUrl] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [liveStreams, setLiveStreams] = useState([]);
  const [genStreams, setGenStreams] = useState([]);
  const [streamExists, setStreamExists] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const copyToClipboard = () => {
    copy(createdStream?.streamKey);
    alert(`copied stream-key`);
}
const address = useActiveAddress()
  const titleRef = useRef(null);
  const {
    mutateAsync: createStream,
    data: createdStream,
    status: createStatus,
  } = useCreateStream(streamTitle ? { name: streamTitle } : null);

  function onCloseModal() {
    setOpenModal(false);
    setStreamExists(true)
  }

  useEffect(() => {
    async function fetchLive() {
      // read contract herer
      const resp = await LiveStream()
      return resp
    }

    fetchLive().then((v) => setLiveStreams(v?.result));

    async function fetchGenerated(){
      const resp = await userStream(address)
return resp
    }
    fetchGenerated().then(v=>setGenStreams(v?.result))
  }, [address]);


  const createdStreamCards = genStreams?.map(s=>{
    // console.log(s)
    return(
      <StreamCard id={s?.key} key = {s?.key} title={s?.title} description={s?.desc} image={s?.thumbnailUrl} streamUrl = {s?.streamUrl} createOrWatch={"create"} />
    )
  })

  const liveStreamCards = liveStreams?.map(s=>{
    // console.log(s)
    return(
      <StreamCard key = {s?.key} id={s?.key} title={s?.title} description={s?.desc} streamUrl={s?.streamUrl} image={s?.thumbnailUrl} createOrWatch={"watch"} />
    )
  })

  return (
    // min-h-[calc(100vh-5rem)]

    <main className="min-h-[calc(100vh-4rem)] flex justify-between pt-14 ">

      <div className="w-full border-2  border-red-500 grid self-center gap-x-20 gap-y-10   grid-cols-3 py-12 px-4">
       {console.log("liveStream",liveStreams)}
       {liveStreamCards}
        {/* {createdStreamCards} */}
      </div>













      <div className="border-2 w-[25%] flex flex-col justify-center gap-8 items-center px-12" >
        {streamExists? <div>{createdStreamCards}</div> :<div className="text-lg">You haven't created any streams yet :{"("}</div> }
        <Button
          className="!bg-rose-700 !outline-none w-24 whitespace-nowrap px-16 py-1  !ring-0 hover:!bg-rose-800"
          onClick={() => setOpenModal(true)}
        >
          {streamExists?"+ Add":"Create"} Stream
        </Button>
        <Modal
          dismissible
          show={openModal}
          size="md"
          onClose={onCloseModal}
          popup
          className="!border-none !outline-none !ring-0"
          initialFocus={titleRef}
        >
          <Modal.Header className="!bg-slate-800 rounded-t-lg" />
          <Modal.Body className="bg-slate-800 rounded-b-lg">
            {console.log(createdStream)}
            {!createdStream ? (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Start a new stream
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="stream title" value="Stream Title" />
                  </div>
                  <TextInput
                    id="Title"
                    placeholder="IRL Streaming"
                    value={streamTitle}
                    onChange={(event) => setStreamTitle(event.target.value)}
                    ref={titleRef}
                    // onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                  </div>
                  <Textarea
                    id="description"
                    className=" focus:!border-white focus:!ring-white"
                    placeholder="Streaming live from the hacker house"
                    value={streamDescription}
                    onChange={(event) =>
                      setStreamDescription(event.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Thumbnail URL" value="Thumbnail URL" />
                  </div>
                  <TextInput
                    id="Thumbnail URL"
                    placeholder="https://"
                    value={streamThumbnailUrl}
                    onChange={(event) =>
                      setStreamThumbnailUrl(event.target.value)
                    }
                    required
                  />
                </div>

                {/* <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Stream URL" value="Stream URL" />
                  </div>
                  <TextInput
                    id="Stream URL"
                    placeholder="https://"
                    value={streamUrl}
                    onChange={(event) => setStreamUrl(event.target.value)}
                    required
                  />
                </div> */}

                <div className="w-full  ">
                  <Button
                    className="!bg-rose-700 !outline-none  !ring-0 hover:!bg-rose-800"
                    disabled={createStatus === "loading" || !createStream}
                    onClick={() => {
                      // const id =uuidv5()
                      if (
                        streamTitle === "" ||
                        streamDescription == "" ||
                        streamThumbnailUrl == ""
                      ) {
                        window.alert("Please fill out all the fields");
                        return;
                      }
                      createStream?.().then((v) => setStreamUrl(v.id));

                      // setStreamCreated(true);
                    }}
                  >
                    Create!
                  </Button>
                </div>
              </div>
            ) : (
              // <div>
              //   <p>{createdStream?.streamKey}</p>
              //   {/* onCloseModal(); */}
              //   <Button onClick={onCloseModal}> copy key </Button>
              //   <Button onClick={onCloseModal}> close </Button>
              // </div>
              <div className='flex flex-col items-center justify-center space-y-3'>
              <p className='text-green-500'>Successfuky Created Stream</p>
              <p className='text-gray-800 font-medium'>Stream Key</p>
              <div className='flex items-center space-x-3 rounded-md border border-gray-700 p-2'>
                  <p>{createdStream?.streamKey}</p>
                  <button onClick={copyToClipboard}>
                  <PiClipboardTextLight className='h-6 w-6 text-black'/>
              </button>
              </div>
              {!isLoading?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'   disabled={isLoading|| !create }
          onClick={() => {
              create({
                title:streamTitle,
                desc:streamDescription,
                thumbnailUrl:streamThumbnailUrl,
                streamUrl:streamUrl
              }).then(()=>onCloseModal())


  
          }}>Broadcast Stream</Button>:
                <Button disabled={ isLoading || !create  } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
          <Spinner
            aria-label="Spinner button example"
            size="sm"
          />
          <span className="pl-3">
            Loading...
          </span>
        </Button>}
              
          </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </main>
  );
}
