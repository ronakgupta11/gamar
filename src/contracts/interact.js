
const { WarpFactory } = require("warp-contracts");
const jwk = require("./wallet.json");

const contractId = "vZoxxIplZnY-gPZOyIk4Pg2LoCnP97dFIgbRMhPUS5c"

const warp = WarpFactory.forMainnet();

(async()=>{


const contract = warp.contract(contractId)
.setEvaluationOptions({allowBigInt: true})
.connect(jwk)




const {cachedValue} = await contract.readState();
console.log('State before any interactions');
console.dir(cachedValue.state, {depth: null});

// Write interaction
console.log("Sending 'createStream' interaction...");
// note: if Warp instance is created with 'forLocal' - the writeInteraction method
// automatically mines a new block - so that you won't have to do it manually in your tests.
// if you want to switch off automatic mining - set evaluationOptions.mineArLocalBlocks to false, e.g.
// contract.setEvaluationOptions({ mineArLocalBlocks: false })
await contract.writeInteraction({function: 'create',data:{
    key:123,
        title:"new stream",
        desc:"description",
        thumbnailUrl:"thumbnailUrl",
        streamUrl:"streamUrl",
}});
console.log('Interaction has been sent');

// Read state after interaction
const stateAfterInteraction = await contract.readState();
console.log('State after 1 interaction');
console.dir(stateAfterInteraction.cachedValue.state, {depth: null});

})()