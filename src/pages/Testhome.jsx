import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';

export default function AuthForm() {
  // Tracking your active class flag natively with React state
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-['Poppins'] text-slate-800 antialiased p-4">
      
      {/* 
        .container 
        Tracks your custom 850x550 desktop bounds & switches to full screen responsive constraints 
      */}
      <div className={`relative w-full max-w-[850px] h-[550px] bg-white max-sm:h-[calc(100vh-40px)] rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden m-5 transition-all duration-300`}>
        
        {/* =========================================================================
            1. LOGIN FORM PANEL
           ========================================================================= */}
        <div 
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-center p-10 max-sm:p-5 max-sm:bottom-0 max-sm:w-full max-sm:height-[70%] z-[1] transition-all duration-[600ms] ease-in-out delay-[1200ms] max-sm:delay-0
            ${isActive 
              ? 'right-1/2 max-sm:right-0 max-sm:bottom-[30%]' 
              : 'right-0'
            }`}
        >
          <form onSubmit={handleSubmit} className="w-full max-w-[320px] mx-auto flex flex-col items-center">
            <h1 className="text-[36px] font-bold text-[#333] tracking-tight mb-2 -mt-2">Login</h1>
            
            <div className="relative w-full my-[30px]">
              <input 
                type="text" 
                placeholder="Username" 
                required 
                className="w-full py-[13px] pl-5 pr-[50px] bg-[#eee] rounded-handle rounded-lg border-none outline-none text-base text-[#333] font-medium placeholder-[#888] font-normal"
              />
              <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>

            <div className="relative w-full mb-[15px]">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className="w-full py-[13px] pl-5 pr-[50px] bg-[#eee] rounded-lg border-none outline-none text-base text-[#333] font-medium placeholder-[#888] font-normal"
              />
              <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>

            <div className="w-full text-right -mt-1 mb-[15px]">
              <a href="#" className="text-[14.5px] text-[#333] hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full h-12 bg-[#7494ec] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none text-white font-semibold text-base cursor-pointer hover:bg-[#6383db] active:scale-[0.99] transition-all">
              Login
            </button>

            <p className="text-[14.5px] text-[#333] my-[15px]">or login with social platforms</p>
            
            <div className="flex justify-center">
              <SocialButton href="#">G</SocialButton>
              <SocialButton href="#">F</SocialButton>
              <SocialButton href="#">Git</SocialButton>
              <SocialButton href="#">In</SocialButton>
            </div>
          </form>
        </div>

        {/* =========================================================================
            2. REGISTRATION FORM PANEL
           ========================================================================= */}
        <div 
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-center p-10 max-sm:p-5 max-sm:bottom-0 max-sm:w-full max-sm:height-[70%] z-[1] transition-all duration-[600ms] ease-in-out delay-[1200ms] max-sm:delay-0
            ${isActive 
              ? 'right-1/2 max-sm:right-0 max-sm:bottom-[30%] visible' 
              : 'right-0 invisible'
            }`}
        >
          <form onSubmit={handleSubmit} className="w-full max-w-[320px] mx-auto flex flex-col items-center">
            <h1 className="text-[36px] font-bold text-[#333] tracking-tight mb-2 -mt-2 max-sm:text-[30px]">Registration</h1>

            <div className="relative w-full my-[30px]">
              <input 
                type="text" 
                placeholder="Username" 
                required 
                className="w-full py-[13px] pl-5 pr-[50px] bg-[#eee] rounded-lg border-none outline-none text-base text-[#333] font-medium placeholder-[#888] font-normal"
              />
              <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>

            <div className="relative w-full mb-[30px]">
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full py-[13px] pl-5 pr-[50px] bg-[#eee] rounded-lg border-none outline-none text-base text-[#333] font-medium placeholder-[#888] font-normal"
              />
              <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>

            <div className="relative w-full mb-[30px]">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className="w-full py-[13px] pl-5 pr-[50px] bg-[#eee] rounded-lg border-none outline-none text-base text-[#333] font-medium placeholder-[#888] font-normal"
              />
              <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>

            <button type="submit" className="w-full h-12 bg-[#7494ec] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none text-white font-semibold text-base cursor-pointer hover:bg-[#6383db] active:scale-[0.99] transition-all">
              Register
            </button>

            <p className="text-[14.5px] text-[#333] my-[15px]">or register with social platforms</p>

            <div className="flex justify-center">
              <SocialButton href="#">G</SocialButton>
              <SocialButton href="#">F</SocialButton>
              <SocialButton href="#">Git</SocialButton>
              <SocialButton href="#">In</SocialButton>
            </div>
          </form>
        </div>

        {/* =========================================================================
            3. TOGGLE SLIDING CANVAS BACKGROUND
           ========================================================================= */}
        <div className="absolute w-full h-full pointer-events-none">
          {/* 
            Sliding Shape Mask Layer (Equivalent to your .toggle-box::before) 
          */}
          <div 
            className={`absolute h-full transition-all duration-[1800ms] ease-in-out bg-[#7494ec] z-[2]
              ${isActive 
                ? 'left-1/2 w-[300%] rounded-[150px] max-sm:left-0 max-sm:top-[70%] max-sm:w-full max-sm:h-[300%] max-sm:rounded-[20vw]' 
                : 'left-[-250%] w-[300%] rounded-[150px] max-sm:left-0 max-sm:top-[-270%] max-sm:w-full max-sm:h-[300%] max-sm:rounded-[20vw]'
              }`}
          />

          {/* LEFT PANEL OVERLAY (Triggers on Registration state) */}
          <div 
            className={`absolute w-1/2 max-sm:w-full h-full max-sm:h-[30%] flex flex-col justify-center items-center text-white z-[2] transition-all duration-[600ms] ease-in-out pointer-events-auto
              ${isActive 
                ? 'left-[-50%] delay-[600ms] max-sm:left-0 max-sm:top-[-30%]' 
                : 'left-0 delay-[1200ms] max-sm:top-0'
              }`}
          >
            <h1 className="text-[36px] font-bold tracking-tight mb-2 max-sm:text-[30px]">Hello, Welcome!</h1>
            <p className="text-[14.5px] mb-5">Don't have an account?</p>
            <button 
              onClick={() => setIsActive(true)}
              className="w-[160px] h-[46px] bg-transparent border-2 border-white rounded-lg text-white font-semibold text-base cursor-pointer tracking-wide hover:bg-white/10 active:scale-95 transition-all"
            >
              Register
            </button>
          </div>

          {/* RIGHT PANEL OVERLAY (Triggers on Login state) */}
          <div 
            className={`absolute w-1/2 max-sm:w-full h-full max-sm:h-[30%] flex flex-col justify-center items-center text-white z-[2] transition-all duration-[600ms] ease-in-out pointer-events-auto
              ${isActive 
                ? 'right-0 delay-[1200ms] max-sm:bottom-0' 
                : 'right-[-50%] delay-[600ms] max-sm:right-0 max-sm:bottom-[-30%]'
              }`}
          >
            <h1 className="text-[36px] font-bold tracking-tight mb-2 max-sm:text-[30px]">Welcome Back!</h1>
            <p className="text-[14.5px] mb-5">Already have an account?</p>
            <button 
              onClick={() => setIsActive(false)}
              className="w-[160px] h-[46px] bg-transparent border-2 border-white rounded-lg text-white font-semibold text-base cursor-pointer tracking-wide hover:bg-white/10 active:scale-95 transition-all"
            >
              Login
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// Micro UI component mapping your social link parameters
function SocialButton({ href, children }) {
  return (
    <a 
      href={href} 
      className="inline-flex justify-center items-center w-11 h-11 border-2 border-[#ccc] rounded-lg text-2xl text-[#333] font-semibold mx-2 hover:border-[#7494ec] hover:text-[#7494ec] transition-all"
    >
      {children}
    </a>
  );
}