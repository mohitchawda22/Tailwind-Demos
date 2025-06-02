import { card } from '../constant/card'
import orangebg from "../assets/images/orangebg.svg"
import bluebg from "../assets/images/bluebg.svg"

function SportsServed() {
    return (
        <div className="bg-sport relative py-20 ">

            <img
                src={orangebg}
                alt="batsman"
                className="absolute bottom-0 left-0 w-36 md:w-44 lg:w-52 z-0"
            />

            <img
                src={bluebg}
                alt="batsman"
                className="absolute top-0 right-0 w-36 md:w-44 lg:w-52 z-0"
            />

            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='sport-heading font-jersey text-white text-6xl leading-[70px]'>
                    Sports we serve
                    <div className="w-28 h-1 bg-red-500 mt-2 " />
                </div>
                <div className='slider flex justify-between flex-col items-center gap-6 py-14 lg:flex-row '>
                    {card.map((item) => (
                        <div className='card bg-white p-6 rounded-3xl' key={item.img}>
                            <div className='-mt-[45px] mb-8 py-[10px] justify-center items-center border border-grey bg-white rounded-[31px] w-36 mx-auto'>
                                <img src={item.img} alt="logo" className='max-h-12 w-full object-contain z-10' />
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
