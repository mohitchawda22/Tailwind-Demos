import React from 'react'
import { card } from '../constant/card'

function SportsServed() {
    return (
        <div className="bg-sport py-20 ">
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='sport-heading font-jersey text-white text-6xl leading-[70px] border-b-2 border-orange'>
                    Sports we serve 
                </div>
                <div className='slider flex justify-between flex-row items-center gap-6 py-14 '>
                    {card.map((item) => (
                        <div className='card bg-white p-6 rounded-3xl' key={item.img}>
                            <div className='-mt-[45px] mb-8 py-[10px] justify-center items-center border border-grey bg-white rounded-[31px] w-36 mx-auto'>
                                <img src={item.img} alt="logo" className='max-h-12 w-full object-contain z-10'/>
                            </div>
                            <h4 className='text-blue font-bold text-[32px] leading-[48px] tracking-[-0.5px] text-center'>Cricket</h4>
                            <p className='font-medium text-lg leading-7 text-center text-gray-600'>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard (20-meter) pitch with a wicket at each end, each comprising two bails balanced.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SportsServed
