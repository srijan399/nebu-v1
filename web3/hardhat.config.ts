import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";

const { RPC_URL_ETH, RPC_URL_BASE, RPC_URL_AMOY, RPC_URL_AIA, PRIVATE_KEY, ETHERSCAN_API, POLYGONSCAN_API, BASESCAN_API } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: RPC_URL_ETH || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    amoy : {
      url: RPC_URL_AMOY || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    baseSepolia: {
      url: RPC_URL_BASE || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    aia: {
      url: RPC_URL_AIA || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      'base-sepolia': `${ETHERSCAN_API}`,
      'polygonAmoy': `${POLYGONSCAN_API}`,
      'sepolia': `${BASESCAN_API}`,
      'aia': `${ETHERSCAN_API}`,
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://base-sepolia.blockscout.com/api",
          browserURL: "https://base-sepolia.blockscout.com"
        }
      },
      {
        network: "aia",
        chainId: 1320,
        urls: {
          apiURL: "https://testnet.aiascan.com/api",
          browserURL: "https://testnet.aiascan.com"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};

export default config;
