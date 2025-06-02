import React from 'react';
import buildicon from "../assets/images/Buildicon.svg"
import Troubleshoot from "../assets/images/Troubleshoot.svg"

function OurOfferings() {
    return (
        <div className="bg-bluebg py-16 px-4">
            <div className="max-w-7xl mx-auto border-2 bg-white grid grid-cols-1 lg:grid-cols-3">
                <div className="flex justify-center items-center border-b lg:border-b-0 lg:border-r border-gray-300 h-full">
                    <h1 className='font-jersey text-[64px] py-28 px-[82px] text-blue leading-[70px] text-left'>
                        Our offerings
                        <div className="w-16 h-1 bg-red-500 mt-2 " />
                    </h1>
                </div>

                <div className="border-b lg:border-b-0 lg:border-r border-gray-300 h-full">
                    <div className="flex flex-col justify-center h-full p-6 gap-4">
                        <img
                            src={buildicon}
                            alt="icon"
                            width={80}
                            height={80}
                            className="text-red-600"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-blue leading-9">
                                Build your own Fantasy sports platform
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Our Whitelabel solution helps you launch your first fantasy sports website/app
                                in a matter of days that too with minimum investment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full">
                    <div className="flex flex-col justify-center h-full p-6 gap-4">
                        <img
                            src={Troubleshoot}
                            alt="icon"
                            width={80}
                            height={80}
                            className="text-red-600"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-blue leading-9">
                                Troubleshoot your Fantasy sports platform
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                If you already have a platform of your own but face performance or scalability
                                issues, especially during popular sporting leagues, we are here to help you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurOfferings;
