var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'jacket economy arrow kingdom iron express cattle bronze approve ivory bicycle hand';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/8bf5e680f1404b5ba57eecbd63184a6c")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/8bf5e680f1404b5ba57eecbd63184a6c");
      },
      network_id: 4,
      gas: 2900000,
      gasPrice: 10000000000,
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: "KJFRSNK1WAAAF5HM7CBYUXBREPE3DY341S"
  },
  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}