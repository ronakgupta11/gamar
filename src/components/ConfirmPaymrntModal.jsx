'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { createTransaction, signTransaction,postTransaction } from "arweavekit/transaction";
import { getBalance } from "arweavekit/wallet";

function ConfirmPaymentModal({creatorAddress,licenseFee,title}) {
  const [openModal, setOpenModal] = useState(false);

  const handleBuyStream = async (creatorAddress,licenseFee)=>{
    console.log(await getBalance({ address: address }));
      if (creatorAddress) {
      console.log(address);
      const tempTransaction = await createTransaction({
        type: "wallet",
        environment: "mainnet",
        target: creatorAddress,
        key: "use_wallet",
        quantity: licenseFee,
        options: { signAndPost: false },
      });
      const signedTransaction = await signTransaction({
        createdTransaction: tempTransaction,
        environment: 'mainnet'
      });
      const postedTransaction = await postTransaction({
        transaction: signTransaction,
        environment: 'mainnet',
    })
    }
    
  }

  return (
    <>
     
      <Button onClick={() => setOpenModal(true)} className="w-full mt-2 h-10 !bg-rose-600 ">Buy Now</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Confirm Payment </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className='flex gap-3'>
                <h1>Game :</h1>
                <h1>{title} </h1>
            </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmPaymentModal