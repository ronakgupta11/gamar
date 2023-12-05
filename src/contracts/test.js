const fs = require('fs');
const path = require('path');
const { WarpFactory, LoggerFactory } = require('warp-contracts');
const { default: ArLocal } = require('arlocal');


(async () => {
    // the pieces of code below should be placed here
    // because they use `await`


const arLocal = new ArLocal(1985, false);
await arLocal.start();

// Set up Warp client
LoggerFactory.INST.logLevel('error');

// note: the 'forLocal' returns Warp instance suitable for local testing with ArLocal
// it is using in-memory cache by default and automatically mines ArLocal blocks
// after writing each interaction
const warp = WarpFactory.forLocal(1985);

// note: warp.testing.generateWallet() automatically adds funds to the wallet
({jwk: wallet, address: walletAddress} = await warp.testing.generateWallet());


const contractSrc = fs.readFileSync(
    `./contract.js`,
    'utf8'
  );
  const initialState = fs.readFileSync(
    './init-state.json',
    'utf8'
  );


  
const contractTxId = await warp.createContract.deploy({
    wallet,
    initState: initialState,
    src: contractSrc,
  });
  
  // note: we need to mine block in ArLocal - so that contract deployment transaction was mined.
  await warp.testing.mineBlock();






















  
// Interacting with the contract
const contract = warp.contract(contractTxId)
.setEvaluationOptions({allowBigInt: true})
.connect(wallet);


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

// Using generatedAssets contract function
const {result: generatedStreams} = await contract.viewState({
function: 'generatedStreams',
});
const generatedstream = generatedStreams[0];
console.log(`Generated asset: ${generatedstream.title}`);

// Transferring the asset to another address
// console.log("Sending 'transfer' interaction...");
// await contract.writeInteraction({
// function: 'transfer',
// data: {
//   to: 'another-address',
//   asset: generatedAsset,
// },
// });
// console.log('Interaction has been sent');

// // Getting the new owner of the asset
// const {result: newOwner} = await contract.viewState({
// function: 'getOwner',
// data: {asset: generatedAsset},
// });
// console.log(`New owner of the asset ${generatedAsset}: ${newOwner}`);

// // Generating the new asset
// console.log("Sending 'generate' interaction...");
// await contract.writeInteraction({function: 'generate'});
// console.log('Interaction has been sent');

// // Getting the final state
// console.log(`Getting final state`);
// const finalState = await contract.readState();
// console.dir(finalState.cachedValue.state, {depth: null});
  })();