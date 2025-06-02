import React from 'react'
import { faqData } from '../constant/faq'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import questionmark from "../assets/images/questionmark.svg"
import triangle from "../assets/images/triangle.svg"

function FaqSection() {
    return (
        <div className="w-full px-4 py-20 bg-faqbg relative">
            <img
                src={questionmark}
                alt="batsman"
                className="absolute top-0 right-0 w-20 md:w-30 lg:w-40 z-0"
            />
            <img
                src={triangle}
                alt="batsman"
                width={120}
                height={120}
                className="absolute bottom-0 left-0 w-20 md:w-30 lg:w-40 z-0"
            />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[70px] font-medium uppercase text-[#002B7F] font-jersey">
                        FAQ
                    </h2>
                    <div className="h-1 w-28 bg-red-500 mx-auto mt-2"></div>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="bg-white rounded-[7px] border border-gray-300">
                                    <DisclosureButton className="flex justify-between w-full px-6 py-4 text-left font-medium text-blue focus:outline-none text-xl leading-7">
                                        <span>{index + 1}. {item.question}</span>
                                        <ChevronDownIcon
                                            className={`${open ? "rotate-180 transform" : ""
                                                } w-5 h-5 text-[#787878]`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-6 pb-4 text-[#707070]">
                                        {item.answer}
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection
