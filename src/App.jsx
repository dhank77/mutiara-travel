import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inspiration from './components/Inspiration'
import WhyChooseUs from './components/WhyChooseUs'
import Itinerary from './components/Itinerary'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Inspiration />
        <WhyChooseUs />
        <Packages />
        <Itinerary />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
