require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC = process.env.MNEMONIC;
// const ROPSTEN_URL = process.env.ROPSTEN_URL;
const KOVAN_URL = process.env.KOVAN_URL;
// const RINKEBY_URL = process.env.RINKEBY_URL;
// const MAINNET_URL = process.env.MAINNET_URL;

module.exports = {
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: () => new HDWalletProvider(MNEMONIC, KOVAN_URL),
      network_id: 42,       // Ropsten's id
      gas: 4700000,        // Ropsten has a lower block limit than mainnet
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
