import React from 'react'
import { trustedImg } from '../constant/trustedImg'
import linebg from "../assets/images/linebg.svg"
import linebg2 from "../assets/images/linebg2.svg"

function TrustedSection() {
  return (
    <div className="bg-white py-20 sm:py-20 relative">
      <img
        src={linebg}
        alt="batsman"
        className="absolute bottom-0 right-0 w-36 md:w-44 lg:w-52 z-0"
      />
      <img
        src={linebg2}
        alt="batsman"
        className="absolute top-0 left-0 w-36 md:w-44 lg:w-52 z-0"
      />
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center text-2xl/9 pb-6 font-semibold text-blue">
          Trusted by
        </h2>
        <div className="flex flex-wrap justify-center gap-6" id='section-down'>
        {trustedImg.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-grey w-60 h-20 flex items-center justify-center p-4"
          >
            <img src={item.imgURL} alt="img" className="object-contain" />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default TrustedSection
