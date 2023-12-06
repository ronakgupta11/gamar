
'use client';
import { useState,useEffect } from 'react';
import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import { confirmTransactions } from '../../query/confirmTransactions';

import { getActiveAddress } from 'arweavekit/auth';
// '/DefaultGameThumbnail.jpg
function GameCard({image,title,description,creatorAddress,licenseFee}) {
 
  useEffect(()=>{
    if(creatorAddress)
    {
      const getPaidStatus= async (creatorAddress,licenseFee)=>{
        const ownerAddress= await getActiveAddress()
        console.log(creatorAddress,ownerAddress)
        const status= await confirmTransactions(ownerAddress,creatorAddress,licenseFee)
        console.log(status)
      }
      getPaidStatus(creatorAddress,"0.003")
    }
  },[])
  return (
    <Card
      style={{height:"28rem"}}
      className="max-w-sm p-3 "
      renderImage={() => <Image  className="self-center" width={300} height={300} objectFit='cover' src={image} alt="image 1" />}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button className='w-23 h-10 !bg-rose-600 '>Buy Now!</Button>
    </Card>
  );
}
export default GameCard
