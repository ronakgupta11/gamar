// import { useState } from 'react'
// import { getContract } from '../configureWarpClient'
// import { getContract } from './configureContract'
import { transactionId } from '@/contracts/contractData'
import { v4 as uuid } from 'uuid'
import { writeContract } from 'arweavekit/contract'


    export default async function create(streamDetails) {


    //   if (!post.title || !post.content) return
      const key  = uuid()
      const title = streamDetails.title
      const desc = streamDetails.desc
      const thumbnailUrl = streamDetails.thumbnailUrl
      const streamUrl = streamDetails.streamUrl
    //   const contract = await getContract()
      
      try {
        const result = await writeContract({
            environment:"mainnet",
            contractTxId:transactionId,
          options:{function: "create",
          data:{
            key,
            title,
            desc,
            thumbnailUrl,
            streamUrl
          }},
          strategy:"arweave"
        })
        console.log('result:', result)
        // router.push('/')
      } catch (err) {
        console.log('error:', err)
      }
    }

