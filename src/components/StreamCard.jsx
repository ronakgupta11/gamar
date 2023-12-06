"use client";

import goLive from "@/lib/goLive";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// '/DefaultGameThumbnail.jpg
function StreamCard({
  image,
  title,
  description,
  createOrWatch,
  id,
  streamUrl,
}) {
  const router = useRouter()

  function watch(k, l) {
    router.push(`/watch?streamId=${k}&title=${l}`);
  }

  console.log("key", id);
  return (
    <Card
      className="max-w-sm p-3 "
      renderImage={() => (
        <img
          className="self-center object-contain"
          width={300}
          height={300}
          src={image}
          alt="image 1"
        />
      )}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
        <Button
          className="w-23 h-10 !bg-rose-600 "
          onClick={() => {
            createOrWatch == "create" ? goLive(id) : watch(streamUrl, title );
          }}
        >
          {createOrWatch == "create" ? "Go Live!" : "Watch Now!"}
        </Button>
    </Card>
  );
}
export default StreamCard;
