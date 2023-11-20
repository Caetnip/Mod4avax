require("@nomicfoundation/hardhat-toolbox");

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",

  etherscan: {
    apiKey: "1VGJISCPKY3A3JKJXQX9INEN6PY8YQZ86TP",
  },

  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, // Only specify a chainId if we are not forking
      forking: forkingData
    },

    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        "f8e5cbd0070871270e7b8876758022c1ac81f792da6c3f717e3423176faf767d",
      ]
    },
    
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [
        "f8e5cbd0070871270e7b8876758022c1ac81f792da6c3f717e3423176faf767d",
      ]
    }
  }
};
