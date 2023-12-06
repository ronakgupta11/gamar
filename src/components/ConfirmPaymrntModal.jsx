'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { createTransaction, signTransaction,postTransaction } from "arweavekit/transaction";
import { getBalance } from "arweavekit/wallet";

function ConfirmPaymentModal({creatorAddress,licenseFee,title}) {
  const [openModal, setOpenModal] = useState(false);

  const handleBuyStream = async (creatorAddress,licenseFee)=>{
    console.log(await getBalance({ address: creatorAddress }));
      if (creatorAddress) {
      console.log(creatorAddress);
      try {
        const tempTransaction = await createTransaction({
            type: "wallet",
            environment: "mainnet",
            target: creatorAddress,
            key: "use_wallet",
            quantity: (licenseFee),
            options: { signAndPost: false },
          });
          const signedTransaction = await signTransaction({
            createdTransaction: tempTransaction,
            environment: 'mainnet'
          });
          const postedTransaction = await postTransaction({
            transaction: signedTransaction,
            environment: 'mainnet',
        })
        console.log(postedTransaction)
      } catch (error) {
        console.log(error)
      }
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
            <div>
                <h1>
                Creator ID :
                </h1>
                <h1 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {creatorAddress}
            </h1>
            </div>
            <div>
                <h1>
                Fees :
                </h1>
            <h1 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {licenseFee/10000000000 } AR
            </h1>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            handleBuyStream("kfMKC_j20hamu9atdBV240QgPIJjFjYzRWLkyt04zNE",licenseFee)
            setOpenModal(false)}
          }>Pay</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmPaymentModal