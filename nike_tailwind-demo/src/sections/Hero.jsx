import { useState } from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'

function Hero() {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    return (
        <section id='home' className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='text-2xl font-montserrat text-red-400'>Our Summer Collection</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                    <br />
                    <span className='text-red-400 inline-block mt-3'>Nike</span>
                    Shoes
                </h1>
                <p className='font-montserrat text-slate-500 text-lg  leading-8 mt-6 mb-14 sm:max-w-sm '>Discover Stylish Nike arrivals,quality comfort, and innovation for your active life.</p>
                <Button label="Show Now" iconUrl={arrowRight} />
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className='text-4xl font-palanquin font-bold '>{stat.value}</p>
                            <p className='leading-7 font-montserrat text-slate-500'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-blue-100 bg-cover bg-center'>
                <img className='object-contain relative z-10' src={bigShoeImg} alt="" width={610} height={502} />
            </div>
            {/* <div className='flex sm:gap-6 gap-4 absolute bottom-[66%] sm:left-[50%] max-sm:px-6'>
                {shoes.map((image, index) => (
                    <div key={index}>
                        <ShoeCard
                            index={index}
                            imgURL={image}
                            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                        />
                    </div>
                ))}
            </div> */}
        </section>
    )
}

export default Hero
