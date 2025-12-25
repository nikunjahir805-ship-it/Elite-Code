import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Features = () => {

  const features = [
    {
      title: "AI Code Completion",
      description: "Boost your coding speed with AI-powered code completion that suggests context-aware code snippets as you type.",
      codeSnippet: `function handleSubmit(){
      // AI generated code to handle form submission
      const response = await fetch("/api/submit")
      // more code here }`,
      imagePosition: "left"
    },

    {
      title: "Automated Testing",
      description: "Generate unit tests automatically to ensure your code is robust and error-free.",
      codeSnippet: `function testHandleSubmit(){
      // AI generated test case
      expect(handleSubmit()).toBeDefined()
      // more test cases here }`,
      imagePosition: "right"
    },

    {
      title: "Smart Debugging",
      description: "Identify and fix errors faster with AI-powered debugging assistance.",
      codeSnippet: `function handleSubmit(){
      // AI detected possible error
      if(!formData){
        throw new Error("Form data is missing") }
            // more fix suggestions here }`,
      imagePosition: "left"
    }

  ]
  
  return (
  
      <section id="features" className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative'>

        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold sm:mb-2'>
              <span className='bg-gradient-to-r from-white via-blue-300 to-cyan-200 bg-clip-text text-transparent leading-relaxed'>Your Complete Development</span><br/>
              <span className='bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent'>WorkFlow</span> 
            </h2>
          </div>

          <div className='space-y-16 sm:space-y-20'>
            {features.map((feature , key) => (
              <div key={key} className={`flex flex-col w-full sm:flex-row gap-8 sm:gap-32 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" :  ""}`}> 
              {/* code section */}
               <div className='flex-1 w-full'>
                <div className='relative group'>
                <div className='inline-flex relative items-center space-x-3 p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-500/50 translate-all border-gray-700/50 px-2 sm:px-3 py-1 sm:py-2 bg-blue-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl mb-4 border shadow-lg shadow-black/20 duration-700'>
                  {/* id section */}
                  <div className='bg-gray-950 font-mono rounded-lg p-3 sm:p-4'>
                    <div className='flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm mb-1 sm:mb-2'> 
                      <div className='flex space-x-1 sm:space-x-1 '>
                         <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-red-500'/>
                         <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-yellow-500'/>
                         <div className=' w-2 sm:w-3 sm:h-3 h-2 rounded-full bg-green-500'/>
                      </div>
                      <span className='text-gray-400 ml-2 sm:ml-4 text-sx sm:text-sm'>{feature.title}</span>
                    </div>
                    <div>
                       <SyntaxHighlighter language='javascript' 
                       style={nightOwl} 
                       customStyle={{margin : 0,
                        backgroundColor : "transparent", 
                        borderRadius : "8px",
                         fontSize :"0.75rem", 
                        lineHeight : "1.4",
                         height : "100%", 
                       border: "1px solid #3c3c3c"}}
                         wrapLines={true}
                       >
                         {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
                </div>
               </div>
               {/* text sections */}
               <div className='flex-1 w-full'>
                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                  <h3 className='text-4xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-white'>{feature.title}</h3>
                  <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>{feature.description}</p>
                </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
export default Features
