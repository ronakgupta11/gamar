import { queryAllTransactionsGQL } from "arweavekit/graphql";

export const confirmTransactions = async (
  ownerAddress,
  creatorAddress,
  licenseFee
) => {
  console.log(creatorAddress);
  const graphqlQuery = `
    query {
        transactions(recipients:["${creatorAddress}"]
        owners:["${ownerAddress}"]
       
        )  {
            edges {
                node {
                    id
                            
                  
                    quantity {
                        
                        ar
                    }
                }
    
            }
        }
    }`;
  let isPaid = false;
  const response = await queryAllTransactionsGQL(graphqlQuery, {
    gateway: "arweave.net",
    filters: {},
  });
  if (response) {
    response.map((data) => {
      if (Number(data.node.quantity.ar) == Number(licenseFee)) {
        isPaid = true;
      }
    });
  }
  console.log("response", isPaid);

  return isPaid;
};
