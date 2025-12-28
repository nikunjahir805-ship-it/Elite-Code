import React from 'react'
import { Link } from 'lucide-react'
import { Brain } from 'lucide-react'
import Spline from '@splinetool/react-spline'
const Hero = () => {
  return (
    <div className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
        <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
            <div className=' relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className=' absolute inset-[4px] bg-black rounded-full flex items-center justify-center'>
                  <span className='flex gap-1'> <Brain className='h-5 w-5' /> Introducing </span>
                </div>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                Email For 
                <br/>
                Devlopmant
            </h1>
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[28rem] lg:max-w-[30rem]'>
                Consistency beats motivation when you are learning to code.
                 Show up every day,
                 build small things,
                 and improvement will follow faster than you expect.
            </p>
            <div className='flex gap-5'>
                 <div className="flex items-center gap-4 mt-8">
                <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full 
                            bg-gradient-to-r from-[#656565] to-[#e99b63] 
                            text-black font-medium tracking-wide
                            shadow-[0_0_20px_rgba(233,155,99,0.4)]
                            hover:scale-105 transition-all duration-300">
                    Documentation <Link className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
             </div>
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full 
                            bg-gradient-to-r from-[#656565] to-[#e99b63] 
                            text-black font-medium tracking-wide
                            shadow-[0_0_20px_rgba(233,155,99,0.4)]
                            hover:scale-105 transition-all duration-300">
                    GetStated <Link className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
             </div>
            </div>
        </div>
        {/* Right Side area */}
        <Spline className='absolute pointer-events-none lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/ekSvnYgbhFHM7dB1/scene.splinecode" />
    </div>
  )
}

export default Hero