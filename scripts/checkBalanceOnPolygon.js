const { ethers, network } = require('hardhat');

async function main() {
  const MetaToken = await ethers.getContractFactory('MetaToken');
  const metaToken = await MetaToken.attach('0x30D3d165Cf44f72966F28B583fD5cbC7d2374F16'); // Polygon contract address

  const account = '0x67063d9BeC7e8CFc22e0BC2DcE7b96b534D8Ea2C'; // Replace with the account address to check

  const balance = await metaToken.balanceOf(account);
  console.log(`Balance of ${account} on Polygon Mumbai: ${balance.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
