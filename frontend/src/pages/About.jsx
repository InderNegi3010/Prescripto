import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section with Enhanced Typography */}
      <div className='relative py-16 text-center'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl mx-8"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-16 items-center mb-20'>
          
          {/* Image Section with Enhanced Styling */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <img 
                className='w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 border-4 border-white' 
                src={assets.about_image} 
                alt="About Prescripto" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Text Content with Enhanced Styling */}
          <div className='lg:w-1/2 space-y-8'>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition duration-300">
                Welcome to <span className="font-bold text-blue-600">Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctors' appointments and managing their health records.
              </p>
              
              <p className="text-lg bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition duration-300">
                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
              </p>
            </div>
            
            {/* Vision Section */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className='text-2xl font-bold mb-4 flex items-center'>
                <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed">
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mb-20'>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              WHY <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>CHOOSE US</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            
            {/* Efficiency Card */}
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full group-hover:scale-150 transition duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition duration-300">
                  Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition duration-300">
                  Streamlined appointment scheduling that fits into your busy lifestyle.
                </p>
              </div>
            </div>

            {/* Convenience Card */}
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition duration-300">
                  Convenience
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition duration-300">
                  Access to a network of trusted healthcare professionals in your area.
                </p>
              </div>
            </div>

            {/* Personalization Card */}
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full group-hover:scale-150 transition duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition duration-300">
                  Personalization
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition duration-300">
                  Tailored recommendations and reminders to help you stay on top of your health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About