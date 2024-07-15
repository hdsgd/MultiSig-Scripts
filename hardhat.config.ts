import("@nomicfoundation/hardhat-ledger");

const privateKey = "";

module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    besu_dev: {
      url: "https://",
      ledgerAccounts: [
        // This is an example address
        // Be sure to replace it with an address from your own Ledger device
        "",
      ],
    },
    amoy: {
      url: "https://",
      accounts: [privateKey],
    },
  },
};
