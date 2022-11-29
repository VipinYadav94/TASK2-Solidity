import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require( "@nomiclabs/hardhat-waffle");

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/JcK2AesIy-C0XaLZZdPiFEKwPKznoRCa",
      accounts: ['fbf1e82a6314a2c6c52044b0fe9cca4f193cb49a14ffa2926ab2e4ca4f8cd149']
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;