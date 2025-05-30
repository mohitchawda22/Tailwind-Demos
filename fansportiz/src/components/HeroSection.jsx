import heroImg from "../assets/images/Hero.png"
import arrowdown from "../assets/images/arrowdown.svg"

function HeroSection() {
    return (
        <div className="px-6 pt-32 lg:px-32 bg-gradient-to-b from-white to-gray-200">
            <div className="mx-auto max-w-6xl py-6 sm:py-6 lg:py-4">
                <div className="text-center">
                    <h1 className="text-balance text-5xl sm:text-6xl lg:text-[80px] font-normal leading-[90px] text-blue font-jersey ">
                        <span className='text-orange'>Captivate</span> your audience
                        with our Whitelabel Solution
                    </h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-[4px] border-4 border-blue shadow-blue px-10 py-6 text-xl leading-[100%] uppercase font-semibold text-blue shadow-md hover:bg-blue hover:text-white translate-y-6 transition-all "
                        >
                            Request a Demo
                        </a>
                    </div>
                    <div className="max-w-full my-14">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
                <div className="justify-center flex items-center">
                    <a href="#section-down" className="uppercase text-xl text-blue font-semibold leading-[30px] tracking-[.4rem] hover:text-orange">
                        scroll 
                        <img src={arrowdown} alt="" className="py-2 mx-auto animate-bounce" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
