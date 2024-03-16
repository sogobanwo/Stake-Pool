import { ethers } from "ethers";
import  Abi from "./ERC20Abi.json";


export const getRewardContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_reward_token_address,
        Abi,
        providerOrSigner
);
