import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, BarChart3, BookOpen, Users, Rocket } from "lucide-react";
import Console from "./Console";
import Demo from "./Viewdemo";
import Wire from "../assets/wire.mp4";
import Navbar from "../components/Navbar";
import Say from "../components/Testimonial"
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Tryit from "../components/Tryit";
import Precision from "../components/Features";
// import Dotgrid from "../components/Dotgrid";

function App() {
    return (
        <section className="relative min-h-screen w-full bg-white overflow-hidden">
            <Navbar />

            {/* <Dotgrid /> */}


            {/* HERO CONTENT CONTAINER */}
            <div className=" max-w-6xl mx-auto w-full px-6">
                
                {/* Trust Badge */}
                <div className="flex justify-center mt-35 relative z-10">
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
                    <button className="border border-black bg-black text-white rounded-2xl w-35 h-12 font-medium hover:text-orange-400 transition-colors transition hover:-translate-y-1 transition-all duration-400">
                        <Link to="/console" className="w-full h-full flex items-center justify-center">
                            Get Started
                        </Link>
                    </button>

                    <button className="border border-black bg-black text-white rounded-2xl w-35 h-12 font-medium hover:text-blue-500 transition-colors transition hover:-translate-y-1 transition-all duration-400">
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



               <Precision />
      <Pricing /> 
       <Say /> 
       <FAQ /> 
       <Tryit /> 
       <Footer />
        </section>
    );
}

export default App;





// import { useState, useEffect, useRef } from "react";
// import { Star, ChevronDown, BarChart3, BookOpen, Users, Rocket } from "lucide-react";
// import { Link } from "react-router-dom";
// import Wire from "../assets/wire.mp4";
// import Dotgrid from "../components/Dotgrid";
// import Precision from "../components/Features";
// import Navbar from "../components/Navbar";
// import Say from "../components/Testimonial"
// import Pricing from "../components/Pricing";
// import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";
// import Tryit from "../components/Tryit";
// import Console from "./Console";

// const TABS = [
//   { id: "draw", label: "Draw", icon: BarChart3 },
//   { id: "generate", label: "Generate", icon: BookOpen },
//   { id: "preview", label: "Preview", icon: Users },
//   { id: "export", label: "Export", icon: Rocket },
// ];

// // ── OVERLAY INTERFACE SUB-COMPONENTS ──
// function AnalyseOverlay() {
//   const steps = ["Upload Wireframe","Detect Components","Analyze Layout","Generate Structure"];
//   return (
//     <div className="flex items-center justify-center mb-8 [animation:fadeInOverlay_0.4s_ease-out_forwards] p-4">
//       <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-xs border border-gray-100">
//         <p className="text-[11px] font-bold text-purple-600 uppercase tracking-widest mb-1">Step 1 of 4</p>
//         <h3 className="text-sm font-semibold text-gray-900 mb-1"> Analyze Wireframe</h3>
//         <p className="text-xs text-gray-500 mb-4">Upload your sketch and let AI detect layouts and components.</p>
//         <div className="bg-gray-100 rounded-full h-1.5 mb-4">
//           <div className="bg-purple-600 h-1.5 rounded-full w-1/4" />
//         </div>
//         <div className="space-y-2.5">
//           {steps.map((step, i) => (
//             <div key={step} className="flex items-center gap-2.5">
//               <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${i === 0 ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-400"}`}>{i + 1}</div>
//               <span className={`text-xs ${i === 0 ? "text-gray-900 font-medium" : "text-gray-400 font-normal"}`}>{step}</span>
//             </div>
//           ))}
//         </div>
//         <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2.5 text-xs font-semibold transition-colors">Analyze →</button>
//       </div>
//     </div>
//   );
// }

// function TrainOverlay() {
//   const metrics = [
//   { label: "Components", value: "24" },
//   { label: "Accuracy", value: "98%" },
//   { label: "Tailwind", value: "Ready" },
//   { label: "ETA", value: "3s" },
// ];
//   return (
//     <div className="flex items-center justify-center mb-8 [animation:fadeInOverlay_0.4s_ease-out_forwards] p-4">
//       <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-xs border border-gray-100">
//         <div className="flex items-center justify-between mb-1">
//           <h3 className="text-sm font-semibold text-gray-900">Generate React Components</h3>
//           <span className="text-[11px] font-bold bg-orange-50 text-orange-600 rounded-full px-2 py-0.5 border border-orange-100">Running</span>
//         </div>
//         <p className="text-xs text-gray-500 mb-4">Converting wireframe into clean React + Tailwind code.</p>
//         <div className="bg-gray-100 rounded-full h-1.5 mb-5">
//           <div className="bg-orange-500 h-1.5 rounded-full w-[67%]" />
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           {metrics.map((m) => (
//             <div key={m.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
//               <p className="text-[11px] text-gray-400 mb-0.5">{m.label}</p>
//               <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
//            </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function TestingOverlay() {
//   const tests = [
//     "Responsive Design",
//     "Accessibility Check",
//     "Component Structure",
//     "Code Validation"
//   ];

//   return (
//     <div className="flex items-center justify-center mb-8 [animation:fadeInOverlay_0.4s_ease-out_forwards] p-4">
//       <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-xs border border-gray-100">
//         <div className="flex items-center gap-2 mb-1">
//           <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>

//           <h3 className="text-sm font-semibold text-gray-900">
//             Live Preview
//           </h3>
//         </div>

//         <p className="text-xs text-gray-500 mb-4">
//           Review the generated UI before exporting.
//         </p>

//         <div className="space-y-2.5">
//           {tests.map((t) => (
//             <div key={t} className="flex items-center justify-between">
//               <span className="text-xs text-gray-700">{t}</span>

//               <div className="flex items-center gap-1.5">
//                 <div className="w-20 bg-gray-100 rounded-full h-1">
//                   <div className="bg-green-500 h-1 rounded-full w-full" />
//                 </div>

//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-4 bg-green-50 rounded-xl p-2.5 text-center border border-green-100">
//           <p className="text-xs font-semibold text-green-700">
//             Preview Ready
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DeployOverlay() {
//   const checks = [
//     "React Components",
//     "Tailwind Styles",
//     "Assets Included",
//     "Ready to Export"
//   ];

//   return (
//     <div className="flex items-center justify-center mb-8 [animation:fadeInOverlay_0.4s_ease-out_forwards] p-4">
//       <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-xs border border-gray-100">

//         <h3 className="text-sm font-semibold text-gray-900 mb-1">
//           Export Project
//         </h3>

//         <p className="text-xs text-gray-500 mb-4">
//           Download production-ready React + Tailwind code.
//         </p>

//         <div className="space-y-2.5">
//           {checks.map((c) => (
//             <div key={c} className="flex items-center gap-2.5">
//               <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>

//               <span className="text-xs text-gray-700">
//                 {c}
//               </span>
//             </div>
//           ))}
//         </div>

//         <button className="mt-4 w-full bg-gray-950 hover:bg-black text-white rounded-lg py-2.5 text-xs font-semibold transition-colors">
//           📦 Export Code
//         </button>

//       </div>
//     </div>
//   );
// }

// const overlays = { draw: AnalyseOverlay, generate: TrainOverlay, preview: TestingOverlay, export: DeployOverlay };

// // ── MAIN LANDING PAGE CONTAINER ──
// export default function StellarHero() {
//   const [activeTab, setActiveTab] = useState("draw");
//   const [overlayKey, setOverlayKey] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setActiveTab((prev) => {
//         const idx = TABS.findIndex((t) => t.id === prev);
//         return TABS[(idx + 1) % TABS.length].id;
//       });
//       setOverlayKey((k) => k + 1);
//     }, 4000);
//     return () => clearInterval(id);
//   }, []);

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//     setOverlayKey((k) => k + 1);
//   };

//   const Overlay = overlays[activeTab];
//   const animateUp = "[animation:fadeInUp_0.6s_ease-out_forwards] opacity-0";

//   return (
//     <>
//       <div className="w-full text-gray-900 antialiased font-sans selection:bg-gray-100">
        
//         <style>{`
//           @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//           @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
//         `}</style>

        

//         <Navbar />

//         {/* HERO SECTION CONTAINER - Scoped explicitly with relative position and overflow-hidden */}
//         <header className="relative w-full overflow-hidden">
          
//           {/* Dotgrid Background wrapper: trapped inside the header context */}
//           <div className="absolute inset-0 z-0 pointer-events-none">
//             <Dotgrid />
//           </div>

//           {/* Hero Content (Pushed visually above Dotgrid using z-10) */}
//           <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28 text-center ">
            
//             {/* Trust Badge */}
//             <div className={`${animateUp} [animation-delay:0.2s] flex justify-center mb-6`}>
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
//                 <Star className="w-3 h-3 fill-black stroke-none" />
//                 <span className="text-xs font-medium text-gray-700">4.9 rating from 18.3K+ users</span>
//               </div>
//             </div>

//             {/* Heading */}
//             <div className={`${animateUp} [animation-delay:0.3s] mb-6`}>
//               <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-black">
//                 Draw it. Describe it.<br />
//                 <span className="bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
//                   Deploy it.
//                 </span>
//               </h1>
//             </div>

//             {/* Subtext */}
//             <div className={`${animateUp} [animation-delay:0.4s] mb-10`}>
//               <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
//                 Generate quick react components for your website using our wireframe to react components generator powered by AI.
//               </p>
//             </div>

//             {/* CTA Button */}
// <div className="mb-14 relative z-[9999]">
//   <button
//     onClick={() => alert("Clicked")}
//     className="bg-black text-white px-8 py-3 rounded-full"
//   >
//     Begin Free Trial
//   </button>
// </div>

//             {/* Navigation Tabs */}
//             <div className={`${animateUp} [animation-delay:0.6s] flex justify-center mb-10`}>
//               <div className="bg-gray-100 border border-gray-200/60 rounded-xl p-1 flex items-center overflow-x-auto max-w-full">
//                 {TABS.map(({ id, label, icon: Icon }, i) => (
//                   <div key={id} className="flex items-center flex-shrink-0">
//                     {i > 0 && <div className="w-[1px] h-4 bg-gray-300 mx-1" />}
//                     <button 
//                       onClick={() => handleTabClick(id)} 
//                       className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                         activeTab === id 
//                         ? "bg-white text-black shadow-sm border border-gray-200/40" 
//                         : "bg-transparent text-gray-500 hover:text-black"
//                       }`}
//                     >
//                       <Icon className="w-4 h-4" />
//                       {label}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* PRESENTATION DISPLAY CONTROLLER */}
// <div className="relative rounded-3xl p-0 max-w-4xl mx-auto">  
//   {/* FIX: Added pointer-events-none and absolute containment here */}
//   <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90%] h-full z-0 pointer-events-none overflow-hidden hidden sm:block">
//     <div className="absolute w-[450px] h-[320px] bg-orange-400/20 blur-[80px] -left-[10%] top-0 rounded-full pointer-events-none" />
//     <div className="absolute w-[450px] h-[320px] bg-purple-400/20 blur-[80px] left-[20%] top-0 rounded-full pointer-events-none" />
//     <div className="absolute w-[450px] h-[320px] bg-blue-400/20 blur-[80px] right-[10%] top-0 rounded-full pointer-events-none" />
//   </div>

//               {/* Main Presentation Box */}
//               <Overlay key={overlayKey} />

//               {/* MARQUEE BRAND SECTION */}
//               <div className={`${animateUp} [animation-delay:0.8s]`}>
//                 <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 select-none opacity-50">
//                   <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-800">Interscope</span>
//                   <span className="text-xs font-bold tracking-[0.12em] uppercase text-gray-800">Spotify</span>
//                   <span className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
//                     <span className="grid grid-cols-2 gap-0.5">
//                       {[...Array(4)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-gray-700 block" />)}
//                     </span>
//                     Nexera
//                   </span>
//                   <span className="text-sm font-bold text-gray-800 font-serif italic">M3</span>
//                   <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-gray-800">
//                     <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[8px] font-bold">LC</span>
//                     Laura Cole
//                   </span>
//                   <span className="flex items-center gap-1 text-xs font-medium text-gray-800">
//                     vertex
//                     {[...Array(3)].map((_, i) => <span key={i} className="w-[3px] h-[3px] rounded-full bg-gray-400 inline-block ml-0.5" />)}
//                   </span>
//                 </div>
//               </div>

//               {/* Video */}
//               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mt-10">
//                 <video
//                   src={Wire}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-full object-cover scale-110"
//                 />
//               </div>
//             </div>

//           </div>
//         </header>

//       </div>

//       {/* Rest of the sections completely clear of Dotgrid */}
//       <Precision />
//       <Pricing />
//       <Say />
//       <FAQ />
//       <Tryit />
//       <Footer />
//     </>
//   );
// }



