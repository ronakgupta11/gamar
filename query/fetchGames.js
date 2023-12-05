import { queryAllTransactionsGQL } from "arweavekit/graphql";


export const fetchAllGames= async ()=>{
    
    const graphqlQuery=`
      query {
        transactions(tags: {
                name: "App-Name",
                values: ["GamAr"]
            }) {
            edges {
                node {
                    id
                            tags {
                        name
                        value
                    }
                }
    
            }
        }
    }
    `
    const result = await queryAllTransactionsGQL(graphqlQuery, {
        gateway: "arweave.net",
        filters: {},
      });
      
     console.log(result)
    
      return result
}
