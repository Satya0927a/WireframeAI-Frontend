import React, { useState } from "react";
import handshake from "../assets/Bro.svg";
import Navbar from "../components/Navbar";
import Satya from "../assets/Satya.png";
import Devesh from "../assets/Devesh.png";
import Footer from "../components/Footer";
// import Founder from "../assets/Founder.svg";


const coreValues = [
  {
    id: "integrity",
    title: "Build Faster",
    description:
"Transform sketches and ideas into production-ready React components in minutes.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: "commitment",
    title: "AI Powered",
    description:
"Leverage AI to automate repetitive development workflows.",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: "passion",
    title: "Developer First",
    description:
 "Built for developers who value speed and flexibility.",
     imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: "seamlessness",
    title: "Production Ready",
    description:
"Generate clean and scalable code ready for deployment.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: "speed",
    title: "Ship Faster",
    description:
      "We care about creating genuine utility and cutting down development time for teams, rather than chasing hollow vanity metrics.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

const people = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    className: "top-8 left-12 rotate-[-4deg]",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    className: "top-24 left-44 rotate-[2deg]",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    className: "bottom-24 left-4 rotate-[3deg]",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
    className: "top-10 right-20 rotate-[2deg]",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300",
    className: "top-32 right-6 rotate-[-2deg]",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    className: "bottom-20 right-44 rotate-[2deg]",
  },
];
 function AboutUsPage() {
  const [expandedId, setExpandedId] = useState("integrity");

  return (
    <>
      <Navbar />

      {/* HERO SECTION & INTRO */}
      <section className="bg-blue-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-8">About Us</h1>
              <p className="text-xl leading-relaxed text-indigo-100 max-w-xl">
                WireframeAI was founded by two developers with a simple goal:
                helping creators transform ideas and wireframes into
                production-ready applications faster than ever.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center">
              <img
                src={handshake}
                alt="WireframeAI Founders"
                className="w-full max-w-xl"
              />
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 text-white">
            <div className="border-t border-indigo-300 pt-5">
              <p className="text-xs tracking-widest uppercase text-indigo-200">Our Story</p>
              <p className="mt-4 text-lg">Started by two developers frustrated with repetitive frontend work.</p>
            </div>
            <div className="border-t border-indigo-300 pt-5">
              <p className="text-xs tracking-widest uppercase text-indigo-200">Mission</p>
              <p className="mt-4 text-lg">Turn ideas and wireframes into real applications in minutes.</p>
            </div>
            <div className="border-t border-indigo-300 pt-5">
              <p className="text-xs tracking-widest uppercase text-indigo-200">Vision</p>
              <p className="mt-4 text-lg">Make software development accessible to everyone.</p>
            </div>
            <div className="border-t border-indigo-300 pt-5">
              <p className="text-xs tracking-widest uppercase text-indigo-200">Journey</p>
              <p className="mt-4 text-lg">From a student project to an AI-powered development platform.</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
                Hi, we're WireframeAI. We're making software development faster, smarter, and more accessible for everyone.
              </h2>
              <p className="mt-10 text-lg text-gray-600 leading-relaxed">
                WireframeAI turns ideas into production-ready code—instantly. Skip the hassle of converting wireframes into frontend builds. Our AI understands your designs and generates clean, responsive code in seconds. Build faster, smarter, and focus on what truly matters—creating.
              </p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Every great product begins with a simple sketch, a rough wireframe, or an idea scribbled on paper. Our goal is to eliminate the gap between imagination and execution by helping creators generate production-ready code in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT WIREFRAMEAI */}
      <section className="w-full bg-amber-50 py-3 lg:py-26 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Mobile + Tablet Layout */}
          <div className="xl:hidden">
            <div className="text-center mb-10 px-2">
              <h2 className="text-4xl font-bold text-gray-800">
                What We <span className="text-blue-500">Believe.</span>
               
              </h2>
              <p className="mt-4 text-gray-500">
               Every day we're building tools that help founders,
               developers and creators transform ideas into real
              products faster than ever.
              </p>
            </div>

            {/* Horizontal Scroll */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className="relative min-w-[82%] h-[440px] rounded-[28px] overflow-hidden snap-center flex-shrink-0"
                >
                  <img
                    src={value.imageUrl}
                    alt={value.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-white/90">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Accordion Layout */}
          <div className="hidden xl:flex items-center gap-16">
            {/* Left Content */}
            <div className="w-[28%] max-w-sm shrink-0">
              <h2 className="text-[58px] leading-[1.08] font-light text-slate-800">
                What We <span className="font-semibold text-blue-500">Believe.</span>
                
              </h2>
              <p className="mt-10 text-gray-500 text-xl leading-relaxed">
                 Every day we're building tools that help founders,
               developers and creators transform ideas into real
               products faster than ever.
              </p>
            </div>

            {/* Accordion Blocks */}
            <div className="flex-1 h-[550px] flex gap-5">
              {coreValues.map((value) => {
                const isExpanded = expandedId === value.id;

                return (
                  <div
                    key={value.id}
                    onMouseEnter={() => setExpandedId(value.id)}
                    className="relative overflow-hidden rounded-[30px] cursor-pointer transition-[flex] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ flex: isExpanded ? "5" : "0.7" }}
                  >
                    <img
                      src={value.imageUrl}
                      alt={value.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/90" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h2
                        className={`text-white font-light origin-left whitespace-nowrap transition-all duration-700 ${
                          isExpanded
                            ? "text-5xl rotate-0 mb-5 translate-y-0"
                            : "text-4xl -rotate-90 -translate-x-2 -translate-y-10"
                        }`}
                      >
                        {value.title}
                      </h2>
                      <div
                        className={`overflow-hidden transition-all duration-700 delay-150 ${
                          isExpanded
                            ? "opacity-100 translate-x-0 max-h-[300px]"
                            : "opacity-0 translate-x-20 max-h-0"
                        }`}
                      >
                        <p className="max-w-lg text-lg leading-relaxed text-white/90">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* WHY WE BUILD SECTION */}
      <section className="bg-[#f5f5f5] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative min-h-[320px]">
          
         
          {/* Center Text Box */}
          <div className="flex flex-col items-center justify-center text-center h-[320px]">
            <h2 className="text-4xl md:text-6xl font-light text-slate-500">Why We</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mt-2">Build?</h3>
            <p className="text-[#475569] text-lg md:text-[22px] leading-[1.8] max-w-4xl mx-auto mt-8 px-4">
              We build WireframeAI to help developers, founders, and creators transform ideas into production-ready applications faster than ever before.
            </p>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto space-y-12 mt-20">
  <div>
    {/* <span className="flex justify-center"> 
      <img src={Founder}
       alt="Founder" 
       className="w-70 h-70 -mt-15 " 
       />
    </span> */}
    <h1 className="text-black font-bold text-[40px] mt-12 flex justify-center items-center">Meet the Founders</h1>

  </div>
  {/* Founder 1 */}
  <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm">

    <div className="grid md:grid-cols-[450px_1fr]">

      {/* Left Image */}
      <div className="h-[400px]">
        <img
          src={Satya}
          alt="Satya"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="p-12 flex flex-col justify-center">

       <h2 className="text-2xl md:text-[1.75rem] font-medium text-[#2D3748] tracking-tight mt-2">
          <span className="font-bold text-[#1A202C]">Satyabrata Padhiary,</span>
          <span className="font-normal ml-2 text-gray-600 text-[20px]"> (CEO & Founder)</span>
        </h2>

        <p className="mt-8 text-xl leading-relaxed text-slate-600">
          Satya leads WireframeAI's product vision and strategy.
          With a background in product design and AI systems,
          he focuses on solving one question:
          why does it take so long to turn an idea into a
          working product?
        </p>

        <blockquote className="mt-10 border-l-4 border-blue-500 pl-5 italic text-xl text-slate-700">
          "Every great product starts with a sketch.
          We're making sure that sketch becomes code in seconds."
        </blockquote>

      </div>

    </div>

  </div>

  {/* Founder 2 */}
  <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm mb-30">

    <div className="grid md:grid-cols-[450px_1fr]">

      <div className="h-[400px]">
        <img
          src={Devesh}
          alt="Devesh"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-12 flex flex-col justify-center">

        <h2 className="text-2xl md:text-[1.75rem] font-medium text-[#2D3748] tracking-tight mt-2">
          <span className="font-bold text-[#1A202C]">Devesh Singh,</span>
          <span className="font-normal ml-2 text-gray-600 text-[20px]"> (CEO & Founder)</span>
        </h2>

        <p className="mt-8 text-xl leading-relaxed text-slate-600">
          Devesh is the technical architect behind WireframeAI.
          He built the systems that transform wireframes
          into clean production-ready React code.
        </p>

        <blockquote className="mt-10 border-l-4 border-blue-500 pl-5 italic text-xl text-slate-700">
          "The best developer tool is the one that disappears.
          You describe what you want and it simply works."
        </blockquote>

      </div>
    </div>
  </div>
</div>

<Footer />
    </>
  );
}
export default AboutUsPage;