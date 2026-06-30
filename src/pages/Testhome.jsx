import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, BarChart3, BookOpen, Users, Rocket } from "lucide-react";
import Console from "./Console";
import Demo from "./Viewdemo";
import Wire from "../assets/wire.mp4";
import Navbar from "../components/Navbar";
// import Say from "../components/Testimonial"
// import Pricing from "../components/Pricing";
// import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";
// import Tryit from "../components/Tryit";
// import Precision from "../components/Features";

function App() {
    return (
        <section className="relative min-h-screen w-full bg-white overflow-hidden">
            <Navbar />


            {/* HERO CONTENT CONTAINER */}
            <div className=" max-w-6xl mx-auto w-full px-6">
                
                {/* Trust Badge */}
                <div className="flex justify-center mt-22 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
                        <Star className="w-3 h-3 fill-black stroke-none" />
                        <span className="text-xs font-medium text-gray-700">4.9 rating from 18.3K+ users</span>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex flex-col items-center text-center mt-6 relative z-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-black">
                        Turn Components into
                        <br />
                        <span className="bg-gradient-to-r from-black via-blue-500 to-blue-400 bg-clip-text text-transparent mt-50">
                            Production Code
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mt-5">
                        Generate quick react components for your website using our wireframe to react components generator powered by AI.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-15 flex justify-center gap-10 relative z-10">
                    <button className="border border-black bg-black text-white rounded-full w-30 h-10 font-semibold hover:text-orange-400 transition-colors">
                        <Link to="/console" className="w-full h-full flex items-center justify-center">
                            Get Started
                        </Link>
                    </button>

                    <button className="border border-black bg-black text-white rounded-full w-30 h-10 font-semibold hover:text-blue-500 transition-colors">
                        <Link to="/demo" className="w-full h-full flex items-center justify-center">
                            View Demo
                        </Link>
                    </button>
                </div>
            </div>

            {/* Video */}
            <div className="relative z-10 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mt-24 mb-20 px-4 sm:px-0">
                <video 
                    src={Wire}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover scale-110"
                />
            </div>

             {/* MARQUEE BRAND SECTION */}
              <div>
                <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 select-none opacity-50">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-800">Interscope</span>
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-gray-800">Spotify</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
                    <span className="grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-gray-700 block" />)}
                    </span>
                    Nexera
                  </span>
                  <span className="text-sm font-bold text-gray-800 font-serif italic">M3</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-gray-800">
                    <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[8px] font-bold">LC</span>
                    Laura Cole
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-800">
                    vertex
                    {[...Array(3)].map((_, i) => <span key={i} className="w-[3px] h-[3px] rounded-full bg-gray-400 inline-block ml-0.5" />)}
                  </span>
                </div>
              </div>



               {/* <Precision /> */}
      {/* <Pricing /> */}
      {/* <Say /> */}
      {/* <FAQ /> */}
      {/* <Tryit /> */}
      {/* <Footer /> */}
        </section>
    );
}

export default App;