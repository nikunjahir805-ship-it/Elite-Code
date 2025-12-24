export const codeExamples = {
  "App.jsx": `import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-lg font-bold text-white">
            Elite<span className="text-blue-400">AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">
          <div className="px-4 py-4 space-y-4 text-gray-300 text-sm">
            <a onClick={() => setOpen(false)} href="#features" className="block hover:text-white">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block hover:text-white">Pricing</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block hover:text-white">Testimonials</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-white">Contact</a>

            <button className="w-full mt-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

`,

  "Hero.jsx": `import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className='min-h-screen flex justify-center items-center text-center'>
      <h1 className='text-4xl font-bold'>Hero Section</h1>
      <ChevronDown className='mt-6 mx-auto' />
    </section>
  )
}

export default Hero
`,

  "Navbar.jsx": `import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full bg-slate-950 text-white'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='font-bold'>Logo</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
`
}

export const floatingCard = {
  "App.jsx" : {
    bgColor : "bg-blue-500/20",
    iconColor : "text-blue-400",
    textColor : "text-blue-200",
    contentColor : "text-blue-300",
    icon : "🤖",
    title : "Smart Completion",
    content : "Leverage generate code snippets and suggest in real-time as you code."
},
 "Hero.jsx" : {
    bgColor : "bg-purple-500/20",
    iconColor : "text-purple-400",
    textColor : "text-purple-200",
    contentColor : "text-purple-300",
    icon : "⚡",
    title : "Auto Animations",
    content : "Bring your UI to life with enhancing the overall user experience."
},
 "Navbar.jsx" : {
    bgColor : "bg-emerald-400/20",
    iconColor : "text-emerald-300",
    textColor : "text-emerald-100",
    contentColor : "text-emerald-200",
    icon : "🔍",
    title : "Smart Search",
    content : "Quickly find code snippets and resources feature powered by AI."
}
}

