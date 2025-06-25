import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

function App() {
  const [show, setShow] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", { rotate: 10, ease: "power4.easeInOut", duration: 2, transformOrigin: "50% 50%" })
      .to(".vi-mask-group", {
        scale: 10, ease: "Expo.easeInOut", duration: 2, transformOrigin: "50% 50%", opacity: 0, onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove()
            setShow(true)
            this.kill()
          }
        }
      })
  }, [show])

  useGSAP(() => {
    if (!show) return
    gsap.to(".main", { duration: 2, rotate: 0, scale: 1, delay: "-1", ease: "Expo.easeInOut" })

    const main = document.querySelector(".main")
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerHeight - 0.5) * 40;

      gsap.to(".main .text", { x: `${xMove * 0.4}%` })
      gsap.to(".sky", { x: xMove })
      gsap.to(".bg", { x: xMove * 1.7 })
    })
  }, [show])
  return (
    <>
      <div className="svg flex items-center justify-center foxed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {show && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar w-full absolute top-0 left-0 px-10 py-10 z-[10]">
              <div className="logo flex gap-4 items-center">
                <div className="lines flex flex-col gap-2">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-2 text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img className="absolute sky top-0 left-0 w-full h-full object-cover scale-[1.1]" src="./sky.png" alt="" />
              <img className="absolute bg top-0 left-0 w-full h-full object-cover scale-[1.1]" src="./bg.png" alt="" />
              <div className="text absolute flex flex-col gap-3 left-1/2 -translate-x-1/2 top-20">
                <h1 className="text-[12rem] text-white leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] text-white leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] text-white leading-none -ml-40">auto</h1>
              </div>
              <img className="absolute -bottom-[30%] character h-full scale-[1.4] left-1/2 -translate-x-1/2" src="./girlbg.png" alt="" />

              <div className="btmbar absolute bottom-0 left-0 w-full px-10 py-10 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-4">
                  <i className="ri-arrow-down-line text-white text-2xl"></i>
                  <h3 className="font-[Helvetica_Now_Display] text-white text-2xl">Scroll down</h3>
                </div>
                <img className="h-[65px] absolute bottom-0 left-1/2 -translate-x-1/2" src="./ps5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="landing w-full h-full flex items-center justify-center px-10 bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg w-1/2">
                <img className="scale-[1.2]" src="./imag.png" alt="" />
              </div>
              <div className="rimg w-[40%] m-auto">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum quasi dolor quo animi, iure corporis? Tempora voluptate numquam eligendi aperiam quibusdam et. Recusandae sed cum velit natus et animi.</p>
                <p className="mt-3 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores! Beatae a non sapiente neque, magni consequuntur! Aliquam cumque repellendus dignissimos id blanditiis suscipit est, quos dicta animi reprehenderit autem?</p>
                <button className="mt-10 text-3xl bg-yellow-300 px-10 py-6 text-black">Play Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
