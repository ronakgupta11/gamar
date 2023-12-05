const fs = require("fs");
const path = require("path");
const { WarpFactory } = require("warp-contracts");
const jwk = require("./wallet.json");
const { DeployPlugin,ArweaveSigner }  = require('warp-contracts-plugin-deploy');
(async () => {
  // Loading contract source and initial state from files
  const contractSrc = fs.readFileSync(path.join(__dirname, "./contract.js"), "utf8");
  const initialState = fs.readFileSync(path.join(__dirname, "./initial-state.json"), "utf8");

  // Warp initialization for mainnet
  const warp = WarpFactory.forMainnet();

  // Deploying contract
  console.log("Deployment started");
  const result = await warp.createContract.deploy({
    wallet:new ArweaveSigner(jwk),
    initState: JSON.stringify(initialState),
    src: contractSrc,
  });

  console.log("Deployment completed: ", {
    ...result,
    sonar: `https://sonar.warp.cc/#/app/contract/${result.contractTxId}`
  });
})();