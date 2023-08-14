async function main() {
    const MetaToken = await ethers.getContractFactory("MetaToken");
    const metaToken = await MetaToken.deploy();
  
    await metaToken.deployed();
  
    console.log("NFT Collection deployed to:", metaToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  