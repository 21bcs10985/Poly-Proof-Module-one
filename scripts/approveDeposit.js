

// // const { ethers } = require('hardhat');
// // const fxPortalAbi = require('./FxPortal.json'); // Adjust the path to the ABI file

// // async function main() {
// //   const MetaToken = await ethers.getContractFactory('MetaToken');
// //   const metaToken = await MetaToken.attach('0x30D3d165Cf44f72966F28B583fD5cbC7d2374F16'); // Ethereum contract address

// //   const signer = ethers.provider.getSigner();

// //   // Replace with the actual address of the Polygon Bridge contract
  
// //   //const bridgeContractAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
// //   const bridgeContractAddress = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';


// //   // Specify the token IDs to be transferred
// //   const tokenIdsToTransfer = [0, 1, 2, 3, 4]; // Replace with your token IDs
// //   const chainId = 137;

// //   for (const tokenId of tokenIdsToTransfer) {
// //     // Approve the token for transfer to the bridge
// //     await metaToken.connect(signer).approve(bridgeContractAddress, tokenId);

// //     // Deposit the token to the bridge
// //     const bridgeContract = new ethers.Contract(bridgeContractAddress, fxPortalAbi, signer);
// //     await bridgeContract.connect(signer).deposit(metaToken.address, tokenId);

// //     console.log(`Deposited token with ID ${tokenId} to the bridge`);
// //   }
// // }

// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error(error);
// //     process.exit(1);
// //   });

  


// //   // We require the Hardhat Runtime Environment explicitly here. This is optional
// // // but useful for running the script in a standalone fashion through `node <script>`.
// // //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("./FxPortal.json");
const tokenContractJSON = require("./artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x30D3d165Cf44f72966F28B583fD5cbC7d2374F16"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x67063d9BeC7e8CFc22e0BC2DcE7b96b534D8Ea2C"; // place your public address for your wallet here
//const gasLimit = 1000000;

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

    const approveTx = await tokenContract.approve(fxERC721RootAddress, 1);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 1, "0x6559");
    //{ gasLimit }
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });





// const hre = require("hardhat");
// const fxRootContractABI = require("./FxPortal.json");
// const tokenContractJSON = require("./artifacts/contracts/MetaToken.sol/MetaToken.json");

// const tokenAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; 
// const tokenABI = tokenContractJSON.abi;
// const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; 
// const walletAddress = "0x67063d9BeC7e8CFc22e0BC2DcE7b96b534D8Ea2C"; 

// async function main() {
//     const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
//     const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

//     const tokenIdsToDeposit = [0, 1, 2, 3, 4]; 
//     const destinationChainID = 80001; 
//     const destinationRecipient = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; 
//     const gasLimit = 300000;
//     for (const tokenId of tokenIdsToDeposit) {
//         const approveTx = await tokenContract.approve(fxERC721RootAddress, tokenId);
//         await approveTx.wait();

//         console.log(`Approval confirmed for token ID ${tokenId}`);

//         const depositTx = await fxContract.deposit(
//             tokenAddress,
//             destinationRecipient,
//            destinationChainID,
//             tokenId,
//           //  "0x6559",
//             { gasLimit }
//         );

//         await depositTx.wait();

//         console.log(`Deposited token ID ${tokenId} to the bridge`);
//     }
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });
