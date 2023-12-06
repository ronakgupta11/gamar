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
    const response = await queryAllTransactionsGQL(graphqlQuery, {
        gateway: "arweave.net",
        filters: {},
      });
      console.log("response",response[0].node.tags)
      const findTagValue = (tagName, tags) => {
        return tags.find((tag) => tag.name === tagName)?.value;
      };
      const determineLicense = (tags) => {
        let licenses = [];
    
        if (findTagValue("Access", tags) === "Restricted") {
          licenses.push(findTagValue("Access", tags) ?? "");
          licenses.push(findTagValue("Access-Fee", tags) ?? "");
        } else if (findTagValue("License-Type", tags) === "oneTime") {
          licenses.push(findTagValue("License-Type", tags) ?? "");
          licenses.push(findTagValue("License-Fee", tags) ?? "");
        } else if (findTagValue("License-Type", tags) === "monthly") {
          licenses.push(findTagValue("monthly", tags) ?? "");
          licenses.push(findTagValue("License-Fee", tags) ?? "");
        } else {
          licenses.push("free");
          licenses.push("None");
        }
    
        return licenses;
      };
     const result = response.map((edges) => {
        const tags = edges.node.tags;
        const contentType=findTagValue("Content-Type",tags).split('/')[0]
        return {
          id: edges.node.id,
          title: findTagValue("Title", tags) || "",
          description: findTagValue("Description", tags) || "",
          license: determineLicense(tags),
          paymentType:findTagValue("License-Type",tags),
          creatorId:findTagValue("Creator-Address",tags),
          contentType : contentType
        };
      });
      
      console.log(result)
      return result
}
