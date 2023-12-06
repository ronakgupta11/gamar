
'use client';
import { useState,useEffect } from 'react';
import { Button, Card } from 'flowbite-react';

import Image from 'next/image';
import { confirmTransactions } from '../../query/confirmTransactions';
import Link from 'next/link';
import { getActiveAddress } from 'arweavekit/auth';
import ConfirmPaymentModal from './ConfirmPaymrntModal';
// '/DefaultGameThumbnail.jpg
function GameCard({image,title,description,creatorAddress,licenseFee, link,paymentType}) {

  const [paidStatus, setPaidStatus] = useState(false)

  link = "https://76pdzit2im7ck2mwkpn2otlvxicfhtw7ugk6omjmy4unghkipfoa.arweave.net/_548onpDPiVpllPbp011ugRTzt-hlecxLMco0x1IeVw/"
 
  useEffect(()=>{
    if(creatorAddress)
    {
      const getPaidStatus= async (creatorAddress,licenseFee)=>{
        const ownerAddress= await getActiveAddress()
        console.log(creatorAddress,ownerAddress)
        const status = await confirmTransactions(ownerAddress,creatorAddress,licenseFee) 
        setPaidStatus(status)
         
      }

      getPaidStatus(creatorAddress, "0.002")
      
      
    }
  },[])

  
  return (
    <Card
      style={{ height: "30rem" }}
      className="max-w-sm p-3 "
      renderImage={() => <Image  className="self-center" width={300} height={300} src={image} alt="image 1" />}
    >
      <h5 className="text-xl font-bold tracking-tight capitalize text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal capitalize text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        Payment : UDL-{paymentType||"One Time "}
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        Game Fee : {licenseFee||"0.0001"} AR
      </p>
      

      {paidStatus ? (
        <Link href={{ pathname: `/arcade`, query: { link: link } }}>
          <Button className="w-full mt-2 h-10 !bg-rose-600 ">Play Now</Button>
        </Link>
      ) : (

        <Link href="#">
         
        <ConfirmPaymentModal title={title} creatorAddress={creatorAddress} licenseFee={licenseFee||String(0.0001*1000000000000)}/>

       
        </Link>

        )}
    </Card>
  );
}
export default GameCard;
