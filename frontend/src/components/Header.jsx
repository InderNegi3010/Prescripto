import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative flex flex-col md:flex-row flex-wrap justify-between rounded-lg px-6 md:px-10 lg:px-20 min-h-[500px] md:min-h-[600px]">
        {/* ---------------Left Side-------------------- */}
        <div className="md:w-1/2 flex flex-col justify-center items-start gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px] animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight transform transition-all duration-1000 hover:scale-105">
              Book Appointment <br /> 
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                With Trusted Doctors
              </span>
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light transform transition-all duration-700 delay-300 hover:scale-105">
            <div className="relative">
              <img className="w-28 transform transition-all duration-500 hover:scale-110 hover:rotate-3" src={assets.group_profiles} alt="" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <p className="max-w-md text-white/90 leading-relaxed">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment, hassle-free.
            </p>
          </div>

          <a 
            href="#speciality" 
            className="group flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-full text-sm font-medium m-auto md:m-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-600">
              Book appointment
            </span>
            <img 
              className="w-3 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" 
              src={assets.arrow_icon} 
              alt="" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* ----------------Right Side---------------- */}
        <div className="md:w-1/2 relative md:h-full flex items-end justify-center">
          <div className="relative transform transition-all duration-1000 hover:scale-105 group w-full">
            <img
              className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500 group-hover:shadow-3xl object-cover"
              src={assets.header_img}
              alt=""
            />
            
            {/* Floating elements around the image */}
            <div className="absolute top-10 left-5 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-float">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <div className="absolute top-32 right-5 bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-float-delay">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                
              </div>
            </div>
            
            <div className="absolute bottom-20 left-0 bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-float-delay-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-medium">Expert Doctors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
        
        .animate-float-delay-2 {
          animation: float-delay-2 3s ease-in-out infinite 2s;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

export default Header;