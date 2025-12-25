import React from 'react'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
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