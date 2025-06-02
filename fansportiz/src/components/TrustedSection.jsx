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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl/9 font-semibold text-blue">
          Trusted by
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5" id='section-down'>
          {trustedImg.map((img, index) => (
            <div className='border border-grey p-5' key={index}>
              <img
                alt="logo"
                src={img.imgURL}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedSection
