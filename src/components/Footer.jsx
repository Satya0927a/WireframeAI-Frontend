// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Social from "../assets/Social.png";

// function Footer() {
//     return (
//         <div className="cursor-pointer bg-black">
//             <div className="p-4">
//                 <h1 className="text-[#BFBFBF]">Site</h1>
//                 <ul className="text-[#FFFFFF]">
//                     <li><Link to="/" className="cursor-pointer hover:text-amber-400 transition">Home</Link></li>
//                     <li><Link to="/about" className="cursor-pointer hover:text-amber-400 transition">About us</Link></li>
//                     <li><Link to="/components" className="cursor-pointer hover:text-amber-400 transition">Components</Link></li>
//                     <li><Link to="/contact" className="cursor-pointer hover:text-amber-400 transition">Contact</Link></li>

//                 </ul>
//             </div>
//             <div className="p-4">
//                 <h1 className="text-[#BFBFBF] mt-5">Socials</h1>
//                 <ul className="text-[#FFFFFF]">
//                     <li><Link to="/instagram" className="cursor-pointer hover:text-[#FF9B51] transition">Instagram</Link></li>
//                     <li><Link to="/linkedin" className="cursor-pointer hover:text-amber-400 transition">Linkedin</Link></li>
//                     <li><Link to="/twitter" className="cursor-pointer hover:text-amber-400 transition">Twitter(X)</Link></li>

//                 </ul>
//             </div>
//             <div className="text-[#BFBFBF] p-4 mt-5">
//                 <h1>WireframeAI</h1>
//                 <h2>@2026 All right reserved.</h2>
//             </div>
//             <div className="bg-white h-160 mt-3  flex flex-col items-center justify-center">

//                 <h1 className="font-bold text-[22px] text-center max-w-[260px] leading-snug m-6" >
//                     \\\  <br /> Let the creativity flow <br /> from within, <br />
//                     Your next project <br /> starts from here

//                 </h1>

//                 <div className="m-2"><img src={Social} alt="Social" /></div>
//                 <div className="bg-blue-300 h-105 rounded-2xl mt-4 w-95 mb-4"></div>
//             </div>
//         </div>

//     )
// }
// export default Footer;



import React, { useEffect, useRef } from 'react';

export default function Footer() {
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    function fitWatermark() {
      if (svgRef.current && textRef.current) {
        try {
          const bbox = textRef.current.getBBox();
          svgRef.current.setAttribute(
            'viewBox',
            `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
          );
        } catch (e) {
          // Fallback if browser environment lacks metrics instantly
        }
      }
    }

    fitWatermark();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    }
    
    window.addEventListener('resize', fitWatermark);
    return () => window.removeEventListener('resize', fitWatermark);
  }, []);

  return (
    <footer className="relative w-full font-['DM_Sans',_sans-serif] text-[#e2e8f0] bg-[#090a0f] px-6 pt-12 pb-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4 items-stretch relative z-10">
        
        {/* Left Section Card — Video Panel */}
        <div className="relative min-h-[340px] rounded-[28px] p-8 overflow-hidden bg-[#102a6b] shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <video 
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-85" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" />
          </video>
          
          {/* FIXED: Added flex-shrink-0 and explicit dimensions to keep the logo perfectly square */}
          <a href="#" className="flex flex-row gap-2.5 items-center relative z-10 no-underline group">
            <div className="w-8 h-8 rounded-lg bg-white/10 border-[1.5px] border-white/85 flex flex-shrink-0 items-center justify-center font-bold text-base text-white tracking-tight">
              W
            </div>
            <span className="text-[22px] font-bold text-white tracking-tight">WireframeAI</span>
          </a>
          
          <div className="mt-auto mb-7 relative z-10">
            <p className="text-[19px] font-normal text-white leading-[1.45]">
              Smarter sales automation,<br />
              <span className="text-white/65">powered by AI.</span>
            </p>
          </div>
          
          <div className="flex flex-row justify-between items-center gap-3 relative z-10">
            <span className="font-['Caveat',_cursive] text-[17px] font-semibold text-white/90 tracking-[0.3px]">
              Stay in touch!
            </span>
            <div className="flex flex-row gap-1.5">
              {/* Discord */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#161920] flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.3)] no-underline transition-all duration-200 hover:bg-[#3b82f6] hover:-translate-y-0.5" aria-label="Discord">
                <svg className="w-[15px] h-[15px] fill-white block" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#161920] flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.3)] no-underline transition-all duration-200 hover:bg-[#3b82f6] hover:-translate-y-0.5" aria-label="X">
                <svg className="w-[15px] h-[15px] fill-white block" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#161920] flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.3)] no-underline transition-all duration-200 hover:bg-[#3b82f6] hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg className="w-[15px] h-[15px] fill-white block" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#161920] flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.3)] no-underline transition-all duration-200 hover:bg-[#3b82f6] hover:-translate-y-0.5" aria-label="GitHub">
                <svg className="w-[15px] h-[15px] fill-white block" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Section Card — Content Panel */}
        <div className="bg-[#12141c] rounded-[28px] p-6 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.2)] flex flex-col justify-between relative overflow-visible">
          
          {/* Floating Lucky Box Badge */}
          <div className="absolute -top-7 sm:-top-9 right-3 sm:right-10 z-10 flex flex-col items-start gap-1.5">
            <div className="w-[72px] sm:w-24 h-[72px] sm:h-24 rounded-[22px] bg-gradient-to-br from-[#3b82f6] via-[#1d4ed8] to-[#1e40af] -rotate-10 flex items-center justify-center shadow-[inset_3px_3px_8px_rgba(255,255,255,0.25),_inset_-3px_-3px_12px_rgba(0,0,0,0.4),_8px_14px_28px_rgba(29,78,216,0.4)]">
              <span className="font-['DM_Sans',_sans-serif] text-3xl sm:text-[42px] font-bold text-white tracking-tighter rotate-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] leading-none">
                W
              </span>
            </div>
            <div className="flex flex-row gap-1.5 items-center -rotate-4 mt-1">
              <div className="w-5 h-5 text-[#4b5563]">
                <svg className="w-full h-full stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <path d="M3 20 C 6 14, 10 9, 18 5" />
                  <path d="M18 5 L 12 5" />
                  <path d="M18 5 L 18 11" />
                </svg>
              </div>
              <span className="font-['Caveat',_cursive] text-[20px] font-semibold text-[#4b5563] whitespace-nowrap">
                Feeling lucky?
              </span>
            </div>
          </div>
          
          {/* Navigation Links Grid Row */}
          <div className="flex">
            <div className="flex flex-row gap-10 sm:gap-[72px] pt-2">
              <div className="flex flex-col">
                <h3 className="font-['Caveat',_cursive] text-2xl font-semibold italic text-[#4b5563] mb-4">
                  Navigation
                </h3>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">How it works</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Features</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Pricing</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Testimonials</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">FAQ</a>
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Caveat',_cursive] text-2xl font-semibold italic text-[#4b5563] mb-4">
                  Company
                </h3>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Blog</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">About</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Terms and Condition</a>
                <a href="#" className="block text-sm font-semibold text-[#cbd5e1] no-underline mb-3 transition-colors duration-200 hover:text-[#3b82f6]">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          {/* Bottom Row — Subscription & Copyright */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0 mt-12">
            <span className="text-[12.5px] font-medium text-[#4b5563]">
              &copy; 2025 WireframeAI. All rights reserved.
            </span>
            
            <div className="flex flex-col gap-3.5 w-full sm:w-auto">
              <h4 className="text-[15px] font-normal text-[#94a3b8] leading-[1.45]">
                AI moves fast.<strong className="block text-[19px] font-bold text-[#f1f5f9]">Stay ahead with WireframeAI.</strong>
              </h4>
              
              {/* FIXED: Added items-center and items-stretch safely to make input and button lock on the same baseline row */}
              <div className="flex flex-row items-center w-full sm:w-[320px] bg-[#1e2230] border border-[#334155] rounded-xl p-1 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="flex-1 min-w-0 px-3 py-2 bg-transparent border-0 outline-none focus:ring-0 text-[13.5px] text-[#f1f5f9] placeholder-[#64748b]"
                />
                <button 
                  type="button" 
                  className="flex-shrink-0 px-5 py-2.5 bg-[#3b82f6] text-white text-[13.5px] font-semibold border-none rounded-lg cursor-pointer shadow-[0_4px_14px_rgba(59,130,246,0.4)] transition-all duration-200 hover:bg-[#2563eb] hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FIXED: Watermark text changed to glowing off-white translucent layout, shifted lower via pt-16 spacer */}
      <div className="max-w-[1150px] mx-auto pt-16 pointer-events-none select-none relative z-0 leading-none" aria-hidden="true">
        <svg 
          ref={svgRef} 
          id="watermarkSvg" 
          viewBox="62 95 876 175" 
          preserveAspectRatio="xMidYMid meet" 
          className="block w-full h-auto overflow-visible"
        >
          <text 
            ref={textRef} 
            id="watermarkText" 
            x="500" 
            y="240" 
            textAnchor="middle" 
            fontSize="320" 
            className="font-bold tracking-tight fill-[#cbd5e1]/30"
          >
            WireframeAI
          </text>
        </svg>
      </div>
    </footer>
  );
}