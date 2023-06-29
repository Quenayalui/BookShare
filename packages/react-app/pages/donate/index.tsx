import { useContractWrite } from "wagmi";
import DonateContractFactory from "../../abis/DonateContractFactory.json";
import { parseEther } from "viem";

export default function DonatePage() {
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: DonateContractFactory.address,
        abi: DonateContractFactory.abi,
        functionName: "createNewDonateContract",
        args: [parseEther("0.1")],
    });
    return (
        <div>
            <button onClick={() => write()}>Donate</button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div>
    );
}
