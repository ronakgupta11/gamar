
import { transactionId } from '@/contracts/contractData'
// import { useActiveAddress } from 'arweave-wallet-kit';
import {  viewContractState } from 'arweavekit/contract'


    export default async function userStream(address) {
        


      try {
        const viewResult = await viewContractState({
            environment: 'mainnet',
            contractTxId: transactionId,
            options: { function: 'generatedStreams' },
            strategy:"arweave"
            
          });

        const keys = viewResult.viewContract.result
        const state  = viewResult.viewContract.state
        const genStreams = []
        keys.map(k=>{

            const streamer = state["streams"][k]["streamer"]

            if( streamer == address){
                genStreams.push(state["streams"][k])

           }
        })

        return {result:genStreams}

      } catch (err) {
        console.log('error:', err)
      }
    }

