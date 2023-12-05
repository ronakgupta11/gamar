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
    const apiUrl ='https://arweave.net/graphql'
    console.log('fetching data...')
    const result = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: graphqlQuery }),
      })
     console.log(result)
      const res= await result.json()
      return res?.data
}
