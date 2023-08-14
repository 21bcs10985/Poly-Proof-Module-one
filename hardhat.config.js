require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli	",
      accounts: ["fe85b1a5898d136cf3d570c1f5b3a83852c4b9ce9e2538c375b2baf45ab95ae9"],
    },
  },
};
