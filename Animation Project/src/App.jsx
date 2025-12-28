import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {
  return (
    <Router>
      <main>
        <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='Gradient' />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
