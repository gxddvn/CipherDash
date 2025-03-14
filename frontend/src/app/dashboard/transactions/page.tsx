import WeeklyChart from "../weeklyChart";

const convertWalletAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
}

export default function Transactions () {
    return (
        <div className="flex flex-col flex-grow w-full h-screen">
            <div className="flex items-center bg-backgroundSecondary border-b-2 border-borderColor px-5 py-4">
                <h1 className="text-lg font-semibold text-mainBgColor">Transactions</h1>
            </div>
            <div className="flex flex-col flex-grow w-full p-5 ">
                <div className="flex flex-col flex-grow w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-col bg-backgroundSecondary p-5 mr-5 w-full rounded-md shadow">
                            <div className="flex items-center justify-between mb-5">
                                <h1 className="text-base font-semibold text-mainBgColor">My Transactions</h1>
                            </div>
                            <div className="flex flex-col mb-5">
                                <span className="text-xl font-extrabold">Total Balance: 124 034$</span>
                                <span className="text-xs font-semibold text-inputColor">PnL: +32 243$(33.4%)</span>
                            </div>
                        </div>
                        <WeeklyChart className="bg-backgroundSecondary p-5 rounded-md shadow" wei="300px" hei="100px"/>
                    </div>
                    <div className="flex flex-col flex-grow bg-backgroundSecondary rounded-md shadow p-5 mt-5">
                        <div className="flex items-center mb-2">
                            <button className="text-xs font-semibold text-mainBgColor rounded-none mx-2 p-1 border-b-2 border-mainBgColor ">All Transactions</button>
                            <button className="text-xs font-semibold text-mainBgColor rounded-none mx-2 p-1 border-b-2 border-backgroundSecondary transition-all ease-linear hover:rounded-md hover:bg-mainBgColor hover:text-backgroundSecondary hover:border-mainBgColor ">Incomes</button>
                            <button className="text-xs font-semibold text-mainBgColor rounded-none mx-2 p-1 border-b-2 border-backgroundSecondary transition-all ease-linear hover:rounded-md hover:bg-mainBgColor hover:text-backgroundSecondary hover:border-mainBgColor">Expenses</button>
                        </div>
                        <div className="overflow-y-auto max-h-60">
                            <table className="min-w-full bg-background rounded-md">
                                <thead>
                                    <tr>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Wallet</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Type</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Transaction ID</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Date</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">From</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Type</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">To</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Amount</th>
                                        <th className="text-xs font-semibold text-secondColor px-4 py-2">Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-background">
                                    {Array(9).fill(null).map((_, index) => (
                                        <tr key={index} className="bg-backgroundSecondary cursor-pointer transition-all ease-linear hover:bg-gray-200 border-b">
                                            <td className="text-center text-xs font-semibold px-4 py-2">{convertWalletAddress("0x87db9c0b21768bf08bc632b95e1b774b6d6dbfe7b4f00b4d28543a160f875bf9")}</td>
                                            <td className="text-center text-xs font-semibold text-mainBgColor px-4 py-2">Transfer</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">46680662</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">16-02-2025</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">{convertWalletAddress("0xc7D284f9F8562Bc4d5557ef6f2C3F6cC3A0C6850")}</td>
                                            <td className="text-center text-xs font-semibold text-mainBgColor px-4 py-2">OUT</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">{convertWalletAddress("0x55d398326f99059fF775485246999027B3197955")}</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">0 BNB</td>
                                            <td className="text-center text-xs font-semibold px-4 py-2">0.0001548</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}