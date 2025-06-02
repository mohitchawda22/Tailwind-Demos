import React from 'react'
import footballer from "../assets/images/footballer.svg"
import radialdot from "../assets/images/radialdot.svg"

function Conversation() {
    return (
        <div className="bg-gradientbg text-white px-6 md:px-20 py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="md:w-1/2">
                    <h2 className="text-[64px] font-normal uppercase leading-[70px] font-jersey">
                        Start a Conversation
                    </h2>
                    <div className="w-28 h-1 bg-red-500 mt-2 mb-4"></div>
                    <p className="text-2xl leading-9 font-normal text-[#E2E2E2]">
                        Play our new interactive adventure game and experience the thrill of the chase.
                    </p>
                </div>

                <div className="md:w-1/2 flex flex-col items-center justify-center mt-8 md:mt-0 relative">
                    <button className="bg-white text-blue px-10 py-6 font-semibold leading-[100%] uppercase rounded-[4px] shadow hover:bg-gradient-to-r from-blue to-black hover:text-white transition-all">
                        TALK WITH US
                    </button>
                    <div className="max-w-xs md:max-w-sm lg:max-w-md flex justify-center mt-6 lg:mt-0">
                        <img
                            src={radialdot}
                            alt="Dotted Background"
                            className="absolute object-contain h-72 right-[-9.5rem] top-12 xl:top-[-7.5rem] hidden md:block"
                        />
                        <img
                            src={footballer}
                            alt="Player"
                            className="absolute bottom-24 h-auto xl:bottom-[-115px] right-[-5rem] hidden md:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
