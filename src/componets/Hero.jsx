import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeExamples, floatingCard } from '../data/codeExamples'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Hero = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");
  const cardinformation = floatingCard[activeTab];
   useEffect(()=>{

    function handleMouseMove(e) {
        setMousePosition({ x: e.clientX, y: e.clientY });  
    }


    window.addEventListener('mousemove', handleMouseMove);  

    return ()=>{

      window.removeEventListener('mousemove', handleMouseMove);

    }
   },[])
  return (
    <section className='min-h-screen flex overflow-hidden pt-16 sm:pt-20 justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
         <div className='inset-0 absolute opacity-30 pointer-events-none' style={{background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px , rgba(59,130,246,0.18), transparent 35%)`}} />
           {/* that is use for a background light */}
         <div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'/>
         <div className='absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'/>
     
     <div className='max-w-7xl mx-auto text-center relative w-full'>
       <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center text-left gap-9 items-center relative'>
        <div>
          <div className='inline-flex items-center space-x-3 px-2 sm:px-3 bg-blue-500/10 backdrop-blur-xl rounded-full mb-4 py-1 sm:py-1 border border-blue-400/20 shadow-lg shadow-black/20 animate-in slide-in-from-bottom duration-700'>
             <Sparkles className="w-4 h-4 animate-pulse" />
            <span className='text-blue-300 text-xs sm:text-sm'>Introducing Elite<span className='text-red-500'>Code</span> Ai</span>
          </div>
          <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-200 leading-tight'>
            <span className='bg-gradient-to-r font-mono from-white via-blue-300 to-cyan-200 bg-clip-text text-transparent block mb-1 sm:mb-2'>Code Faster</span>
            <span className='bg-gradient-to-r font-mono from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2'>Build Better</span>
            <span className='bg-gradient-to-r font-mono from-white via-blue-300 to-cyan-200 bg-clip-text text-transparent block mb-1 sm:mb-2'>With Code Elite<span className='text-red-600 animate-pulse'>Code</span> Ai</span>
          </h1>
          <p className='text-md sm:text-base lg:text-sm text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
            We build intelligent tools that help you turn ideas into clean code and polished interfaces.
             Our AI works quietly in the background, 
            supporting your workflow and helping you build faster without added complexity.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
                <button className="relative group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 focus:outline-none ">
                  
                  {/* Glow layer */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-xl opacity-40 group-hover:opacity-70 transition"></span>

                  {/* Button text */}
                  <span className="relative z-10 flex items-center  gap-2">
                    🚀 Start Demo
                  </span>
                </button>
              </div>
        </div>
      <div className='relative order-2 w-full'>
        <div className='backdrop-blur-xl bg-white/5 relative rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10'>
          <div className='bg-gradient-br from-gray-900/20 to-gray-800/20 backdrop:blur-sm rounded-b-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/10 shadow-lg shadow-black/20'>
             <div className='flex justify-between items-center px-3 sm:px-5 py-2 sm:py-4 bg-white/5 backdrop:blur-sm border-b border-white/10'>
               <div className='flex space-x-4 items-center rounded-full'>
                 <div className='flex space-x-1 sm:space-x-1 '>
                  <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-red-500'/>
                  <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-yellow-500'/>
                  <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-green-500'/>
                </div>
                <span className='text-xs sm:text-sm text-gray-400 font-semibold'>Elite<span className='text-red-500'>Code</span> Ai</span>
               </div>
               <ChevronDown className='w-2 h-2 sm:w-4 sm:h-4 text-gray-400' />
              </div> 
                  <div className='p-3 sm:p-4 relative h-full'> 
                     {/* that is a file section mitter */}
                     <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'> 
                        <button onClick={()=> setActiveTab("App.jsx")} className={`px-2 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${ activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}>  App.jsx</button>
                        <button onClick={()=> setActiveTab("Hero.jsx")} className={`px-2 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${ activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}> Hero.jsx</button>
                        <button onClick={()=> setActiveTab("Navbar.jsx")} className={`px-2 py-3 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${ activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 ":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}> Navbar.jsx</button>
                    </div>
                    {/* code content */}
                    <div className='overflow-hidden relative'>
                      <SyntaxHighlighter language='javascript' style={nightOwl} customStyle={{margin : 0, borderRadius : "8px", fontSize :"11px", lineHeight : "1.4", height : "100%", border: "1px solid #3c3c3c"}}>
                        {codeExamples[activeTab]}
                      </SyntaxHighlighter>
                    </div>
                 </div>
             </div>
             {/* floating Card */}
          <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${cardinformation.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-lg shadow-black/30`}>
              <div className='flex items-center space-x-2 mb-2'>

                <div className={'h-6 w-6 flex items-center justify-center text-sm'}>{ cardinformation.icon}</div>

                <span className={`${cardinformation.textColor} font-semibold text-sm`}>{ cardinformation.title}</span>
              </div>
              <div className={`${cardinformation.contentColor} font-semibold text-sm`}>{ cardinformation.content}</div>
          </div>
        </div>
      </div> 
    </div>
   </div>
    </section>
  )
}

export default Hero