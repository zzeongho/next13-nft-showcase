// import { MetaMaskSDK } from "@metamask/sdk";
import Web3 from "web3";
import MINT_NFT_ABI from "@/lib/mintNftAbi.json";
// const MMSDK = new MetaMaskSDK();

// export const ethereum = MMSDK.getProvider();
// export const web3 = new Web3(ethereum);

const web3 = new Web3<any>(window.ethereum);

const MINT_NFT_ADDRESS = "0xE07675529794B77B193a42eb1375b6d8b4fAeA87";

export const mintNftContract = new web3.eth.Contract(
  MINT_NFT_ABI,
  MINT_NFT_ADDRESS
);

// export const MUMBAI_CHAIN_ID = 80001;

export const PINATA_URL =
  "https://olbm.mypinata.cloud/ipfs/QmU52T5t4bXtoUqQYStgx39DdXy3gLQq7KDuF1F9g3E9Qy";

export interface INFT {
  name: string;
  description: string;
  image: string;
}
