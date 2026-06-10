import { useState } from "react";
import phone from '../assets/phone.png'
import video from "../assets/demo.mp4";
import photo from "../assets/photo1.png"
import photo1 from "../assets/photo2.png"
import photo2 from "../assets/photo.png"
import arrow from "../assets/arrow.png"
import TestimonialStack from "../components/TestimonialStack";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div className="background">
      <Navbar /> 

    <div className="">
      <div className=" mt-15 flex flex-col gap-4 text-white ml-4">
        <h1 className="text-[40px] font-extrabold leading-tight">Turn Ideas Into
          <span className="text-amber-500 block -mt-2">Components</span></h1>
        <p className="text-[19px]">Generate quick react components for you website using our wireframe to react
          component generator powered by AI.</p>
        <button className="bg-amber-500 cursor-pointer w-32 h-12 rounded-2xl text-center text-black border-t-2 border-white  hover:scale-105 transition font-bold">
          Get Started
        </button>
        <div className="relative w-[380px] mx-auto mt-6">


          {/* VIDEO */}
          <div className="absolute top-[85px] left-1/2 -translate-x-1/2 
    w-57 h-115 rounded-[22px] overflow-hidden z-0 rotate-[4deg]">

            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
            />

          </div>

          {/* PHONE */}
          <img
            src={phone}
            alt="phone"
            className="relative -z-10 w-full"
          />

        </div>
      </div>
      {/* Steps */}
      <div >
        <h1 className="text-white font-bold items-center text-[30px] 
      leading-tight -mt-2 text-center">Create UI Components <br />in 3 simple steps</h1>
        <p className="text-gray-200 text-center text-[15px] p-2">
          Our AI Powered component genertor makes it easy for you to design your webspage with easse and fast
        </p>
        {/* <Card topvariant={false}/>
        <Card topvariant={true}/>
        <Card topvariant={false}/> */}

        <Card
          topvariant={false}
          image={photo}
          title="Create The Wireframe"
          desc="Draw the structure of the component using our editor tools"
        />

        <Card
          topvariant={true}
          image={photo2}
          title="AI Processing"
          desc="Well structured code that follow industry best practice"
        />

        <Card
          topvariant={false}
          image={photo1}
          title="Export & Use"
          desc="Use your components directly in your project"
        />

        {/* PricingCard */}
        <div className="mt-15 mb-9">
          <h1 className="text-white font-bold text-center text-[38px]">Pricing</h1>
          <p className="text-[#BFBFBF] flex justify-center items-center  text-[12px]">Explore from our affordable ranges of price for our service </p>
        </div>



        <PricingCard
          title="FREE PLAN"
          price="0"
          desc="Enjoy the free plan with limited usage"
          features={[
            "5 component generation/mo",
            "React export",
            "Access to all components",
            "Community support"
          ]}
        />
        <PricingCard
          title="PRO PLAN"
          price="5"
          desc="enjoy the free plan with limited usage this is the text i dont know what else"
          features={[
            " Everything in Pro",
            "Team collaboration",
            "Custom design tokens",
            "API access",
            "Dedicated account manager"
          ]}
        />
        <PricingCard
          title="TEAM PLAN"
          price="10"
          desc="Enjoy the free plan with limited usage"
          features={[
            "5 component generation/mo",
            "React export",
            "Access to all components",
            "API access",
            "Community support"
          ]}
        />

        <TestimonialStack />
        <FAQ />
        <Footer />
      </div>
  
    </div>
          </div>
  )
}
const Card = ({ topvariant, image, title, desc }) => {
  return (
    <div className={`p-5 h-70 m-5 rounded-2xl bg-linear-to-t to-[#323232] from-[#1A1A1A] from-50% border-t-2 border-white shadow-lg flex flex-col ${!topvariant ? "justify-end items-end" : " flex-col-reverse justify-start items-start"}`}>

      {/* Image */}
      <div className={`${topvariant ? "ml-auto" : "mr-auto "}`}>
        <img src={image} alt="photo" />
      </div>

      {/* Text */}
      <div className="w-50 ">
        <h1 className="text-white font-bold text-[18px]">
          {title}
        </h1>
        <p className="text-[#BFBFBF] text-[16px]">
          {desc}
        </p>
      </div>

    </div>
  );
};




const PricingCard = ({ title, price, desc, features }) => {
  return (

    <div className="p-6 h-125 m-6 mt-10 justify-center rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-t-2 border-white text-white ">

      {/* Title */}
      <h2 className="text-lg font-semibold">{title}</h2>

      {/* Price */}
      <h1 className="text-4xl font-bold text-orange-400 mt-2">
        ${price}
        <span className="text-base text-gray-400">/month</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 mt-3 text-sm">
        {desc}
      </p>

      {/* Button */}
      <div className="mt-5">
        <button className="w-full border-t-2 cursor-pointer hover:scale-100 border-white flex items-center justify-between pl-5 h-14 pr-1 rounded-full bg-gradient-to-r from-[#ADADAD] from-50 to-[#444444] text-black font-serif text-[25px] ">
          Get started
          <span className="bg-white rounded-full p-5 h-13"><img className="h-4 " src={arrow} alt="arrow" /></span>
        </button>
      </div>

      {/* Features */}
      <ul className="mt-5 text-gray-400 text-[18] space-y-1">
        {features.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

    </div>
    
  );
};




export default Home;