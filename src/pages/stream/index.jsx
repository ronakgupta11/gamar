"use client";
import { useEffect, useRef, useState } from "react";
import { useCreateStream } from "@livepeer/react";
import {
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  Card,
} from "flowbite-react";
import StreamCard from "@/components/StreamCard"
export default function Stream() {
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [streamThumbnailUrl, setStreamThumbnailUrl] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [liveStreams, setLiveStreams] = useState([]);
  const [streamExists, setStreamExists] = useState(false)
  

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
    async function fetch() {
      // read contract herer
    }

    fetch().then((v) => setLiveStreams(v?.streams));
  }, []);

  return (
    // min-h-[calc(100vh-5rem)]

    <main className="min-h-[calc(100vh-4rem)] flex justify-between pt-14 ">

      <div className="w-full border-2  border-red-500 grid self-center gap-x-20 gap-y-10   grid-cols-3 py-12 px-4">
        <StreamCard createOrWatch={"watch"} title="randomTitle" description={"randomdesc"} image={"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="} />
        <StreamCard createOrWatch={"watch"} title="randomTitle" description={"randomdesc"} image={"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="} />
        <StreamCard createOrWatch={"watch"} title="randomTitle" description={"randomdesc"} image={"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="} />
        <StreamCard createOrWatch={"watch"} title="randomTitle" description={"randomdesc"} image={"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="} />

         
         
         
         
          {/* className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          // imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {streamTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {streamDescription}
          </p>
          <Button href={streamUrl}> Go Live! </Button> */}
      </div>













      <div className="border-2 w-[25%] flex flex-col justify-center gap-8 items-center px-12" >
        {streamExists?(<StreamCard  title={streamTitle} description={streamDescription} image={streamThumbnailUrl} createOrWatch={"create"} />):<div className="text-lg">You haven't created any streams yet :{"("}</div> }
        <Button
          className="!bg-rose-700 !outline-none w-24 whitespace-nowrap px-16 py-1  !ring-0 hover:!bg-rose-800"
          onClick={() => setOpenModal(true)}
        >
          {streamExists?"+ Add":"Create"} Stream
        </Button>
        <Modal
          
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
              <div>
                <p>{createdStream?.streamKey}</p>
                {/* onCloseModal(); */}
                <Button onClick={onCloseModal}> copy key </Button>
                <Button onClick={onCloseModal}> close </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </main>
  );
}
