

const convertWalletAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
}

export default function Wallets () {
    return (
        <div className="flex flex-col flex-grow w-full h-screen">
            <div className="flex items-center bg-backgroundSecondary border-b-2 border-borderColor px-5 py-4">
                <h1 className="text-lg font-semibold text-mainBgColor">Wallets</h1>
            </div>
            <div className="flex flex-col flex-grow w-full p-5 ">
                <div className="flex flex-col flex-grow bg-backgroundSecondary w-full mr-5 p-5 rounded-md shadow">
                    <div className="flex items-center justify-between mb-5">
                        <h1 className="text-base font-semibold text-mainBgColor">My Wallets</h1>
                    </div>
                    <div className="flex flex-col mb-5">
                        <span className="text-xl font-extrabold">Total Balance: 124 034$</span>
                        <span className="text-xs font-semibold text-inputColor">PnL: +32 243$(33.4%)</span>
                    </div>
                    <div className="flex justify-end items-center pb-1">
                        <button className="text-sm font-semibold text-mainBgColor py-2 px-3 rounded-xl transition-all ease-linear hover:text-backgroundSecondary hover:bg-mainBgColor">+ Add wallet</button>
                    </div>
                    <hr className="border-t-2 border-borderColor mb-5" />
                    <div className="flex flex-col flex-grow overflow-y-auto h-64">
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
                    </div>
                </div>
            </div>
        </div>
    )
}