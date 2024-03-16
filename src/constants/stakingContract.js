import { ethers } from "ethers";
import Abi from "./stakingAbi.json";


export const getStakingPool = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_stake_pool_contract_address,
        Abi,
        providerOrSigner
);


