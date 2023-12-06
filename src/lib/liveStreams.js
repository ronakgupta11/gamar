
import { transactionId } from '@/contracts/contractData'
// import { useActiveAddress } from 'arweave-wallet-kit';
import {  viewContractState } from 'arweavekit/contract'


    export default async function LiveStream() {
        


      try {
        const viewResult = await viewContractState({
            environment: 'mainnet',
            contractTxId: transactionId,
            options: { function: 'generatedStreams' },
            strategy:"arweave"
            
          });

        const keys = viewResult.viewContract.result
        const state  = viewResult.viewContract.state
        const liveStreams = []

        // console.log("liveState",state["streams"][k]["isLive"])
         keys.map(k=>{
            const isLive = state["streams"][k]["isLive"]
            console.log("live",isLive)

            if( isLive)
            {liveStreams.push(state["streams"][k])}
            // console.log("----------------",liveStreams)
            
           
        })
        console.log("---------->>>>>>>",liveStreams)

        return {result:liveStreams}
        // router.push('/')
      } catch (err) {
        console.log('error:', err)
      }
    }

