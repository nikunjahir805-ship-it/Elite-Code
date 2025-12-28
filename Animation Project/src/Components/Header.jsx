import { useState } from 'react'
import { List, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-20 relative z-50">
      
      {/* Logo */}
      <h1 className="text-3xl sm:text-4xl font-light">Neoxis</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <Link className="hover:text-gray-400 transition" to="/">Home</Link>
        <Link className="hover:text-gray-400 transition" to="/features">Features</Link>
        <Link className="hover:text-gray-400 transition" to="/pricing">Pricing</Link>
        <Link className="hover:text-gray-400 transition" to="/testimonials">Reviews</Link>
        <Link className="hover:text-gray-400 transition" to="/contact">Contact</Link>
      </nav>

      {/* Desktop Auth */}
      <div className="hidden md:flex gap-4">
        <Link to="/login" className="px-6 py-2 rounded-full border border-gray-700 hover:bg-white hover:text-black transition">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black font-medium hover:scale-105 transition">
          Sign Up
        </Link>
      </div>

      {/* Mobile Button */}
      <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
        <List />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              className="flex flex-col items-center gap-8 pt-24 text-lg"
            >
              <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-3xl">
                <X />
              </button>

              <Link onClick={() => setOpen(false)} to="/">Home</Link>
              <Link onClick={() => setOpen(false)} to="/features">Features</Link>
              <Link onClick={() => setOpen(false)} to="/pricing">Pricing</Link>
              <Link onClick={() => setOpen(false)} to="/testimonials">Reviews</Link>
              <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
              <Link onClick={() => setOpen(false)} to="/login">Login</Link>
              <Link onClick={() => setOpen(false)} to="/signup" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black">
                Sign Up
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
