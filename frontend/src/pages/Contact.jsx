import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className='relative py-16 text-center'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl mx-8"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">We'd love to hear from you. Get in touch with us!</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pb-20'>
        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <img 
                className='w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 border-4 border-white' 
                src={assets.contact_image} 
                alt="Contact Prescripto" 
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className='lg:w-1/2 space-y-8'>
            
            {/* Office Information Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m4 0h1"></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                  OUR OFFICE
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className='text-gray-700 font-medium'>Address</p>
                    <p className='text-gray-600 leading-relaxed'>
                      547809 Haldwani Station<br />
                      Gaulapar, Uttrakhand, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-indigo-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className='text-gray-700 font-medium'>Contact Details</p>
                    <p className='text-gray-600'>
                      <span className="block">📞 Tel: (415) 555-0132</span>
                      <span className="block">✉️ Email: indernegi@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers Card */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold'>Careers at Prescripto</h3>
              </div>
              
              <p className='text-lg leading-relaxed mb-8 text-white/90'>
                Learn more about our teams and job openings. Join us in revolutionizing healthcare technology!
              </p>
              
              <button className='group/btn bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2'>
                <span>Explore Jobs</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>

            {/* Additional Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Quick Contact Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Quick Call</h4>
                <p className="text-sm text-gray-600">Get instant support</p>
              </div>

              {/* Live Chat Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Live Chat</h4>
                <p className="text-sm text-gray-600">Chat with our team</p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Experience the future of healthcare management with Prescripto</p>
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact