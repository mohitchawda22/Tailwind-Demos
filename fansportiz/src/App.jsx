import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SportsServed from "./components/SportsServed"
import TrustedSection from "./components/TrustedSection"
import OfferingSection from "./components/OfferingSection"
import PlatformSection from "./components/PlatformSection"
import TalkWithUs from "./components/TalkWithUs"
import FaqSection from "./components/FaqSection"
import Conversation from "./components/Conversation"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return ( 
   <>
    <Navbar/>
    <HeroSection/>
    <TrustedSection/>
    <SportsServed/>
    <OfferingSection/>
    <PlatformSection/>
    <TalkWithUs/>
    <FaqSection/>
    <Conversation/>
    <Footer/>
   </>
  )
}

export default App
