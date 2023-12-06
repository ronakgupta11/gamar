
'use client';

import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
// '/DefaultGameThumbnail.jpg
function StreamCard({image,title,description, createOrWatch}) {
  return (
    <Card
      className="max-w-sm p-3 "
      renderImage={() => <Image  className="self-center object-contain" width={300} height={300} src={image} alt="image 1" />}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button className='w-23 h-10 !bg-rose-600 '>{createOrWatch=="create"?"Go Live!":"Watch Now!"}</Button>
    </Card>
  );
}
export default StreamCard
