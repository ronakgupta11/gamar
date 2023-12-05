import { useCreateStream } from '@livepeer/react';

const {
    mutateAsync: createStream,
    data: createdStream,
    status: createStatus,
  } = useCreateStream(streamName ? { name: streamName } : null);


  const key = createdStream?.streamKey
  const id = await createStream().id