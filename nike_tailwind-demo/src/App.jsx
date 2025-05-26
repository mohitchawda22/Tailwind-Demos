import Navbar from "./Components/Navbar"
import {Hero,Subscribe,Services,Specialoffer,SuperQuality,Footer,PopularProducts,CustomerReviews} from "./sections/index"

function App() {

  return (
    <main className="relative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      {/* <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
       <Services/>
      </section>
      <section className="padding">
       <Specialoffer/>
      </section>
      <section className="padding bg-blue-300">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section> */}
    </main>
  )
}

export default App
