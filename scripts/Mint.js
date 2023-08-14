const { ethers } = require('hardhat');

async function main() {
  const MetaToken = await ethers.getContractFactory('MetaToken');
  const metaToken = await MetaToken.attach('0x30D3d165Cf44f72966F28B583fD5cbC7d2374F16'); // Replace with the actual contract address

  const recipient = '0x67063d9BeC7e8CFc22e0BC2DcE7b96b534D8Ea2C'; // Replace with the recipient's Ethereum address
  const numTokensToMint = 4; // Number of tokens to mint

  for (let tokenId = 3; tokenId < numTokensToMint; tokenId++) {
    const tokenURI = `ipfs://QmbZsiiSh2MYaLokVKkY54sECKm9prTZcHPvaAWTZUDrdE/${tokenId}`; // Replace with the correct IPFS URI
    await metaToken.mintNFT(recipient, tokenId, tokenURI);
    console.log(`Minted NFT with token ID ${tokenId}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //npx hardhat run deploy.js --network goerli


  // npx hardhat run approveDeposit.js --network goerli