import React from 'react'
import { items } from '../constant/platform'
import soccer from '../assets/images/soccer.svg'
import batsman from '../assets/images/batsman.svg'
import bluedot from '../assets/images/bluedot.svg'
import orangedot from '../assets/images/orangedot.svg'

function PlatformSection() {
  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden ">
      <img
        src={soccer}
        alt="soccer balls"
        className="absolute top-0 left-0 w-36 md:w-44 lg:w-52 z-0"
      />

      <img
        src={batsman}
        alt="batsman"
        className="absolute bottom-0 right-0 w-36 md:w-44 lg:w-52 z-0"
      />
      <img
        src={bluedot}
        alt="batsman"
        className="absolute top-0 right-0 w-36 md:w-44 lg:w-52 z-0"
      />
      <img
        src={orangedot}
        alt="batsman"
        className="absolute bottom-0 left-0 w-36 md:w-44 lg:w-52 z-0"
      />

      <h2 className="text-center font-jersey text-4xl md:text-5xl text-blue mb-10 relative z-10">
        PLATFORM EXCLUSIVITY
        <div className="w-32 h-1 bg-red-500 mx-auto mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300  p-8 flex items-start gap-4"
          >
            <div className="mt-1">
              <img src={item.icon} width={58} height={58} alt="" />
            </div>
            <div>
              <h3 className="text-[32px] font-bold leading-[48px] tracking-[-0.5px] text-blue">{item.title}</h3>
              <p className="text-gray-700 text-lg font-medium leading-7 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlatformSection
