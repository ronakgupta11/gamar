import { WarpFactory } from 'warp-contracts'
import { transactionId } from '@/contracts/contractData'
// import { InjectedArweaveSigner } from 'warp-contracts-plugin-signature';
// import wallet from './testwallet'
// import { usePublicKey } from 'arweave-wallet-kit';


/*
*  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
*/

const environment = 'mainnet'
let warp
let contract


// await wallet.connect();
// const userSigner = new InjectedArweaveSigner(wallet);
// await userSigner.setPublicKey();



async function getContract() {
// const publicKey = usePublicKey();

  if (environment == 'testnet') {
    warp = WarpFactory.forTestnet()
    contract = warp.contract(transactionId).connect(wallet)
  } else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet()
    contract = warp.contract(transactionId).connect()
  } else {
    throw new Error('Environment configured improperly...')
  }
  return contract
}

export {
  getContract
}