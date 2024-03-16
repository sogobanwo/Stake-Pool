import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import toast from "react-hot-toast";

const CreatePool = () => {
    const [rewardRate, setRewardRate] = useState(0)
    const CreatePool =useCreatePool(parseInt(rewardRate))

    const handleCreatePool =()=>{
        if (rewardRate == 0) {
            toast.error("reward rate has to be greater than 0")
            return;
        }
        CreatePool();
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-blue-600">Create Pool</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Create your own pool
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Input your reward rate
                        </Text>
                        <TextField.Input
                            value={rewardRate}
                            placeholder="input reward rate"
                            onChange={(e)=>setRewardRate(e.target.value)}
                        />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Button
                        className="bg-blue-600"
                        onClick={handleCreatePool}
                    >
                        Create Pool
                    </Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default CreatePool;
