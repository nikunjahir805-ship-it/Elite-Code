import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing/>
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home