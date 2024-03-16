import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getStakingPool } from "../constants/stakingContract";
import toast from "react-hot-toast";

const useUnstake = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(
        async (poolId) => {
            if (!isSupportedChain(chainId))
                return console.error("Wrong network");
            const readWriteProvider = getProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();

            const contract = getStakingPool(signer);
            const loadingToast= toast.loading('Unstaking...');

            try {
                const transaction = await contract.unstake(poolId);
                console.log("transaction: ", transaction);
                const receipt = await transaction.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    toast.remove(loadingToast)
                    return toast.success("Unstaking successful")
                }

                console.log("Failed to unstake");
            } catch (error) {
                toast.remove(loadingToast)

                console.log(error);

                toast.error(error.reason)
            }
        },
        [chainId, walletProvider]
    );
};

export default useUnstake;
