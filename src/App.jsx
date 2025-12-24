import React from 'react'
import Features from './componets/Features'
import Hero from './componets/Hero'
import Pricing from './componets/Pricing'
import Testimonials from './componets/Testimonials'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import Contact from './componets/Contact'
const App = () => {
  return (
    <div className='bg-slate-950 min-h-screen text-white overflow-hidden'>
      <Navbar />
       <Hero />
       <Features />
        <Pricing />
       <Testimonials />
       <Contact />
       <Footer />
    </div>
  )
}

export default App