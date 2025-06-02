import React from 'react'
import arrowIcon from "../assets/images/arrowIcon.svg"

function TalkWithUs() {
  return (
    <section className="bg-talkbg text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-[64px] font-normal leading-[70px] uppercase font-jersey relative inline-block">
            BE A PART OF THE ACTION
            <span className="block h-1 w-28 bg-orange mt-2"></span>
          </h2>
          <p className="mt-4 text-2xl font-normal leading-9 text-white">
            Let's Create Something Awesome
          </p>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow"
          className="absolute hidden md:block first-line:md:top-10 md:right-10 first-line:lg:top-16 lg:right-20 xl:top-[2rem] xl:right-[15rem] first-line:w-16 md:w-20 lg:w-24"
        />
        <div className="">
          <button className="bg-white text-blue font-semibold text-xl leading-[100%] py-6 px-10 rounded shadow hover:bg-blue hover:text-white transition-all">
            TALK WITH US
          </button>
        </div>
      </div>
    </section>
  )
}

export default TalkWithUs
