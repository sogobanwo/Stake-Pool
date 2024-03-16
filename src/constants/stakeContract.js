import { ethers } from "ethers";
import  Abi from "./ERC20Abi.json";


export const getStakeContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_stake_token_address,
        Abi,
        providerOrSigner
);