import { Flex } from "@radix-ui/themes";
import CreatePool from "./CreatePool";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>Stake Pool</div>
            <Flex gap={"4"} align={"center"}>
               <CreatePool />
                <w3m-button />
            </Flex>
        </div>
    );
}
