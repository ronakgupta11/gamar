"use client";

import { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
  Card,
} from "flowbite-react";

import { v5 as uuidv5 } from "uuid";
import Link from "next/link";

export default function Stream() {
  const [streamCreated, setStreamCreated] = useState(false);
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [streamThumbnailUrl, setStreamThumbnailUrl] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef(null);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    // min-h-[calc(100vh-5rem)]

    <main className="min-h-[calc(100vh-4rem)] flex flex-col pt-14 ">
      {streamCreated ? (
        <div className=" border-2  border-red-500 grid self-center gap-x-20 gap-y-10   grid-cols-3 py-12 px-4">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc="/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {streamTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {streamDescription}
            </p>
            <Button href={streamUrl} > Go Live! </Button>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc="/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link href={streamUrl}><Button > Go Live! </Button></Link>
          </Card>

        </div>
      ) : (
        <div className="flex flex-col h-[calc(100vh-6.5rem)] justify-center  border-2 items-center gap-3">
          <div className="text-lg">
            {"You haven't created any streams yet :("}{" "}
          </div>
          <Button
            className="!bg-rose-700 !outline-none  !ring-0 hover:!bg-rose-800"
            onClick={() => setOpenModal(true)}
          >
            Create Stream
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

                <div>
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
                </div>

                <div className="w-full  ">
                  <Button
                    className="!bg-rose-700 !outline-none  !ring-0 hover:!bg-rose-800"
                    onClick={() => {
                      // const id =uuidv5()
                      if(streamTitle==="" || streamDescription=="" ||streamThumbnailUrl==""||streamUrl==""  ){
                        window.alert("Please fill out all the fields")
                        return
                      }
                      onCloseModal();
                      setStreamCreated(true);
                    }}
                  >
                    Create!
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </main>
  );
}
