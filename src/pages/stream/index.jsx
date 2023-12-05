"use client";

import { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";

export default function Stream() {
  const [streamCreated, setStreamCreated] = useState(false);
  const [streamName, setStreamName] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [streamThumbnailUrl, setStreamThumbnailUrl] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef(null)

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    // min-h-[calc(100vh-5rem)]

    <main className=" min-h-[calc(100vh-5rem)] flex flex-col pt-14 justify-center">
      {streamCreated ? (
        <div>Created stream</div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg">
            {"You haven't created any streams yet :("}{" "}
          </div>
          <Button className="!bg-rose-700" onClick={() => setOpenModal(true)}>
            Create Stream
          </Button>
          <Modal
            dismissible
            show={openModal}
            size="md"
            onClose={onCloseModal}
            popup
            className="!"
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
                    value={""}
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
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Thumbnail URL" value="Thumbnail URL" />
                  </div>
                  <TextInput id="Thumbnail URL" placeholder="https://" />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Stream URL" value="Stream URL" />
                  </div>
                  <TextInput id="Stream URL"  placeholder="https://" />
                </div>



                <div className="w-full  ">
                  <Button className="!bg-rose-700 !outline-none  !ring-0 hover:!bg-rose-800" onClick={()=>{
                    onCloseModal()
                  }}>Create!</Button>
                </div>

              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </main>
  );
}
