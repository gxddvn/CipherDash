export default function Settings () {
    return (
        <div className="flex flex-col flex-grow w-full h-screen">
            <div className="flex items-center bg-backgroundSecondary border-b-2 border-borderColor px-5 py-4">
                <h1 className="text-lg font-semibold text-mainBgColor">Settings</h1>
            </div>
            <div className="flex flex-col flex-grow w-full p-5 ">
                <div className="flex flex-col bg-backgroundSecondary w-full mr-5 p-5 rounded-md shadow">
                    <div className="flex items-center">
                        <button className="text-xs font-semibold text-mainBgColor rounded-none mx-2 p-1 border-b-2 border-mainBgColor ">Edit Profile</button>
                        <button className="text-xs font-semibold text-noFocusColor rounded-none mx-2 p-1 border-b-2 border-backgroundSecondary transition-all ease-linear hover:text-mainBgColor">Preferences</button>
                        <button className="text-xs font-semibold text-noFocusColor rounded-none mx-2 p-1 border-b-2 border-backgroundSecondary transition-all ease-linear hover:text-mainBgColor">Security</button>
                    </div>
                    <hr className="mb-2"/>
                    <div className="flex ">
                        <div></div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}