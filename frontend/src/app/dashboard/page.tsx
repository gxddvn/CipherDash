import { EllipsisHorizontal } from "../icons";
import Charts from "./charts";


export default function Dashboard () {

    const convertWalletAddress = (address: string) => {
        return address.slice(0, 6) + "..." + address.slice(-4);
    }

    return (
        <div className="flex flex-col flex-grow w-full">
            <div className="flex items-center bg-backgroundSecondary border-b-2 border-borderColor px-5 py-4">
                <h1 className="text-lg font-semibold text-mainBgColor">Overview</h1>
            </div>
            <div className="flex flex-col flex-grow w-full p-5 ">
                <div className="flex justify-between">
                    <div className="flex flex-col bg-backgroundSecondary w-full mr-5 p-5 rounded-md shadow">
                        <div className="flex items-center justify-between mb-5">
                            <h1 className="text-base font-semibold text-mainBgColor">My Wallets</h1>
                            <button className="text-sm font-semibold cursor-pointer transition-all ease-linear hover:text-mainBgColor">See all</button>
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className="text-xl font-extrabold">Total Balance: 124 034$</span>
                            <span className="text-xs font-semibold text-inputColor">PnL: +32 243$(33.4%)</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between border-2 border-borderColor rounded-2xl p-3 my-1">
                                <span className="text-xs font-semibold text-blackColor">${convertWalletAddress("0xc7D284f9F8562Bc4d5557ef6f2C5F6cC3A0C6923")}</span>
                                <span className="text-xs font-semibold text-blackColor">Balance: 74 453$</span>
                                <button className="text-xs font-semibold transition-all ease-linear hover:text-mainBgColor">View</button>
                            </div>
                            <div className="flex items-center justify-between border-2 border-borderColor rounded-2xl p-3 my-1">
                                <span className="text-xs font-semibold text-blackColor">${convertWalletAddress("0xc7D284f9F8562Bc4d5557ef6f2C5F6cC3A0C6923")}</span>
                                <span className="text-xs font-semibold text-blackColor">Balance: 74 453$</span>
                                <button className="text-xs font-semibold transition-all ease-linear hover:text-mainBgColor">View</button>
                            </div>
                            <div className="flex items-center justify-center">
                                <EllipsisHorizontal className="size-4 text-secondColor" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-backgroundSecondary rounded-md shadow p-5 min-w-80">
                        <h1 className="text-base font-semibold mb-5 text-mainBgColor">Recent Transaction</h1>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between my-1">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-blackColor">Input</span>
                                    <span className="text-xs font-medium text-secondColor">21-02-2024 14:22</span>
                                </div>
                                <span className="text-sm font-semibold text-inputColor">+ 0.1 BTC</span>
                            </div>
                            <div className="flex items-center justify-between my-1">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-blackColor">Output</span>
                                    <span className="text-xs font-medium text-secondColor">21-02-2024 14:22</span>
                                </div>
                                <span className="text-sm font-semibold text-outputColor">- 0.5 BTC</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Charts />
            </div>
        </div>
    );
}