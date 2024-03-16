import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getStakingPool } from "../constants/stakingContract";
import toast from "react-hot-toast";
import { getRewardContract } from "../constants/rewardContract";
import { ethers } from "ethers";

const useCreatePool = (rewardRate) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
	
    return useCallback(
        async () => {
            if (!isSupportedChain(chainId))
                return console.error("Wrong network");
            const readWriteProvider = getProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();
						console.log(signer);
						console.log("hello");
            const stakingContract = getStakingPool(signer);
						const rewardContract = getRewardContract(signer);
						console.log("hi");
						
            try {
							const loadingToast1= toast.loading('Approving Contract spend...');
							const txERC20Approval = await rewardContract.approve(import.meta.env.VITE_stake_pool_contract_address, ethers.parseUnits("100", 18))
							await txERC20Approval.wait()
							toast.remove(loadingToast1)
							toast.success(`Contract Approved to spend!`)
						
								const loadingToast2= toast.loading('Creating Pool...');
                const txCreatePool = await stakingContract.createPool(rewardRate);
                const receipt = await txCreatePool.wait();
								
                console.log("receipt: ", receipt);

                if (receipt.status) {
									toast.remove(loadingToast2)
									return toast.success(`Pool Created`)
                }

                console.log("Failed to unstake");
            } catch (error) {
                // toast.remove(loadingToast1)
                // toast.remove(loadingToast2)
								
                console.log(error);

                toast.error(error.reason)
            }
        },
        [rewardRate, chainId, walletProvider]
    );
};

export default useCreatePool;
