import React from 'react'
import logo from "../assets/images/Logo.svg"
import fb from "../assets/images/facebook.svg"
import youtube from "../assets/images/youtube.svg"
import x from "../assets/images/x.svg"
import link from "../assets/images/link.svg"
import pdf from "../assets/images/pdf.svg"
import yudiz from "../assets/images/yudiz.svg"

function Footer() {
  return (
    <footer className="bg-white border-t py-[100px] pb-6 md:px-10 lg:px-20 text-[#1D1D1D]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:grid-cols-3 items-start justify-between">
        <div className="flex items-start gap-4">
          <img src={logo} alt="FanSportiz Logo" className="w-28 h-auto" />
          <p className="text-xl max-w-xs leading-[34px] text-[#707070] font-medium">
            <span className="font-semibold text-[#707070]">FanSportiz</span> is a fantasy sports platform delivering fun and thrilling experiences to your customers.
          </p>
        </div>

        <div className=''>
          <h4 className="font-bold text-2xl pb-6 leading-9 text-blue">Quick links</h4>
          <ul className="space-y-6 text-2xl font-medium leading-9 text-blue">
            <li className="text-red-500 font-medium">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Plans</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-blue text-2xl leading-9 mb-4">Connect with Us</h4>
            <div className="flex gap-10 text-xl text-[#1D1D1D]">
              <a href=""><img src={fb} alt="" title='facebook' /></a>
              <a href=""><img src={x} alt="" title='x' /></a>
              <a href=""><img src={link} alt="" title='linkdin' /></a>
              <a href=""><img src={youtube} alt="" title='youtube' /></a>
            </div>
          </div>
          <button className="flex items-center my-12 border-2 rounded-2xl px-3 py-5 text-xl leading-[30px] font-medium text-blue hover:bg-blue hover:text-white hover:border-blue hover:shadow-blue shadow-md shadow-white transition h-auto ">
            <a href=""><img src={pdf} alt="" /></a>
            <p className='text-left'>Download Complete <br /><span className="font-bold">Presentation</span></p>
          </button>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <p className="text-blue text-lg font-semibold leading-7">
            © Fansportiz, 2021 Powered By
          </p>
          <a href="">
            <img src={yudiz} alt="Yudiz Logo" className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex gap-4 text-gray-500">
          <a href="#" className="hover:text-red-500">Terms & Conditions</a>
          <span className="text-red-500">/</span>
          <a href="#" className="hover:text-red-500">Privacy Policy</a>
          <span className="text-red-500">/</span>
          <a href="#" className="hover:text-red-500">Disclaimer</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
