import  {Menu , X}  from 'lucide-react';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full transition-all duration-300 bg-slate-950/70 backdrop-blur-xl shadow-lg'>

       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-4 group cursor-pointer'>
              <div>
              <img src="/logo.png" alt="Logo" className='h-9 w-9 sm:h-16 sm:w-16'/>
            </div>

             <span className='text-lg sm:text-xl md:text-2xl font-medium'>
               <span className='text-white'>Elite</span>
               <span className='text-red-600'>Code</span>
             </span>

            </div> 

            <div className='hidden md:flex items-center space-x-6 sm:space-x-7'>

              <a href="#features" className='text-gray-300 hover:text-blue-800 transition-colors duration-300'>
                Features
                </a>
              <a href="#pricing" className='text-gray-300 hover:text-red-800 transition-colors duration-300'>
                Pricing
                </a>
              <a href="#testimonials" className='text-gray-300 hover:text-blue-600 transition-colors duration-300'>
                Testimonials
                </a>
              <a href="#contact" className='text-gray-300 hover:text-red-800 transition-colors duration-300'>
                Contact
                </a>

            </div>

            <button onClick={()=> setMobileMenuIsOpen((prev) => !prev)} className='md:hidden p-3 text-gray-300 hover:text-blue-800'>
              {mobileMenuIsOpen ? (<X  className='h-6 w-6 sm:h-8 sm:w-8'/>) 
              : (<Menu className='h-6 w-6 sm:h-8 sm:w-8'/>)}
            </button>

          </div>
       </div>
       {mobileMenuIsOpen &&
        <div className='md:hidden animate-in slide-in-from-top duration-500'>
             <div className='px-4 py-4 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center'>
            <a href="#features" onClick={()=> setMobileMenuIsOpen(false)} className='text-gray-300 hover:text-blue-800 transition-colors duration-300'>
                Features
                </a>
              <a href="#pricing" onClick={()=> setMobileMenuIsOpen(false)}  className='text-gray-300 hover:text-green-800 transition-colors duration-300'>
                Pricing
                </a>
              <a href="#testimonials"  onClick={()=> setMobileMenuIsOpen(false)} className='text-gray-300 hover:text-red-600 transition-colors duration-300'>
                Testimonials
                </a>
              <a href="#contact"  onClick={()=> setMobileMenuIsOpen(false)} className='text-gray-300 hover:text-yellow-800 transition-colors duration-300'>
                Contact
                </a>
             </div>
        </div>}
    </nav>
  )
} 

export default Navbar