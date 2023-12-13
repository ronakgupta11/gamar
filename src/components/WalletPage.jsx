import {
    useConnection,
    ConnectButton,
    useActiveAddress,
  } from "arweave-wallet-kit";
  import { createTransaction, signTransaction } from "arweavekit/transaction";
  import { useEffect, useState } from "react";
  import { getBalance } from "arweavekit/wallet";
  import { Navbar, Button } from "flowbite-react";
  import Link from "next/link";
import Image from "next/image";
  function WalletPage() {
    const [transaction, setTransaction] = useState();
  
    async function transactionCreator() {
      console.log(await getBalance({ address: address }));
      // if (address != undefined) {
      console.log(address);
      const tempTransaction = await createTransaction({
        type: "wallet",
        environment: "mainnet",
        target: "kfMKC_j20hamu9atdBV240QgPIJjFjYzRWLkyt04zNE",
        key: "use_wallet",
        quantity: "1",
        options: { signAndPost: false },
      });
      setTransaction(tempTransaction);
      console.log(transaction);
  
      //   console.log(transaction)
      // }
    }
  
    async function signer() {
      const signedTransaction = await signTransaction({
        createdTransaction: transaction,
      });
      console.log(signedTransaction);
    }
  
    return (
      <>
        <div fluid rounded className=" bg-rose-700 left-0 top-0 fixed z-50 w-full flex justify-between px-4 py-1">
          <div href="#" className="flex">
            <span className="self-center lg:mx-12 font-  whitespace-nowrap text-2xl leading-loose tracking-wide dark:text-white font-extrabold">
              <Link 
               style={{fontFamily:"cursive",
               
               display:"flex"
              }}
              href={"/"}>
              <Image width={50} height={50} src={"/arcade.png"}/>
               GameAr
              </Link>
            </span>
          </div>
  
          <div className="flex items-center gap-7 text-white font-space">
            <div href="#" active className="!text-white !self-center !flex ">
              <Link href="/sellGame">
              Sell Games
              </Link>
            </div>
            <div href="#">
             <Link href={"/buyGames"}>
             Buy Games
             </Link>
            </div>
            <div href="/arcade">
              <Link href="/arcade">Arcade</Link></div>
            <div href="/stream"> <Link href="/stream">Stream</Link></div>
  
            <ConnectButton
              accent="rgb(255 18 60)"
              profileModal={true}
              showBalance={true}
              className="h-min"
            />
          </div>
        </div>
  
        {/* <div className="bg-red-700 p-2  flex justify-between">
          <div className="border-2 flex h-min text-white self-center">gamAr</div>
          <div className="flex">
          <ConnectButton
            accent="rgb(255, 0, 0)"
            profileModal={true}
            showBalance={true}
            className="h-min border-2"
          />
          <button onClick={transactionCreator}>create the transaction</button>
          <button onClick={signer} className="border-2 bg-blue-500 px-2">sign a transaction</button>
          </div>
        </div> */}
      </>
    );
  }
  
  export default WalletPage;
  