
import { transactionId } from '@/contracts/contractData'
import { writeContract } from 'arweavekit/contract'


    export default async function goLive(key) {


    //   const contract = await getContract()
      
      try {
        const result = await writeContract({
            environment:"mainnet",
            contractTxId:transactionId,
          options:{function: "endStream",
          data:{
            key
           
          }},
          strategy:"arweave"
        })
        console.log('result:', result)
        // router.push('/')
      } catch (err) {
        console.log('error:', err)
      }
    }

