
'use client';
import { useState,useEffect } from 'react';
import { Button, Card } from 'flowbite-react';

import Image from 'next/image';
import { confirmTransactions } from '../../query/confirmTransactions';
import Link from 'next/link';
import { getActiveAddress } from 'arweavekit/auth';
import ConfirmPaymentModal from './ConfirmPaymrntModal';
import { CardContent } from './ui/card';
// '/DefaultGameThumbnail.jpg
function CaraouselCard ({image,title,description,creatorAddress,licenseFee, link,paymentType}) {

  const [paidStatus, setPaidStatus] = useState(false)

  link = "https://76pdzit2im7ck2mwkpn2otlvxicfhtw7ugk6omjmy4unghkipfoa.arweave.net/_548onpDPiVpllPbp011ugRTzt-hlecxLMco0x1IeVw/"

  return (
    <Card
      style={{ height: "25rem" }}
      className="max-w-sm p-3 "
      
    >
        <img  className="self-center w-full"
         style={{width:"20rem",height:"15rem"}}
        src={image} alt="image 1" />
      <Button  className=" mt-2 h-10 !bg-rose-600 ">
        <Link href='/buyGames'>
        Explore !
        </Link>
        </Button>
    </Card>
  );
}
export default CaraouselCard;
