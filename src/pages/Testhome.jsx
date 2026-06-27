import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, BarChart3, BookOpen, Users, Rocket } from "lucide-react";
import Console from "./Console";
import Demo from "./Viewdemo";
import Wire from "../assets/wire.mp4";

function App() {
    return (
        <section className="">

            {/* Trust Badge */}
            <div className={"flex justify-center mt-35"}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
                    <Star className="w-3 h-3 fill-black stroke-none" />
                    <span className="text-xs font-medium text-gray-700">4.9 rating from 18.3K+ users</span>
                </div>
            </div>

            <div className="flex flex-col items-center text-center mt-15">
                <h1 className="text-[52px] font-bold leading-tight">
                    Turn Components into
                    <br />
                    Production Code
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    Generate quick react components for your website using our wireframe to react components generator powered by AI.
                </p>
            </div>

            <div className="mt-15 flex justify-center gap-10">
                <button className=" border border-black bg-black text-white rounded-full w-30 h-10">
                    <Link
                        to="/Console"
                    >
                        Get Started

                    </Link>
                </button>

                <button className="border border-black bg-black text-white rounded-full w-30 h-10">
                    <Link
                        to="/Demo"
                    >
                        View Demo

                    </Link>
                </button>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mt-10">
                <video src={Wire}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover scale-110 ">

                </video>
            </div>
        </section>
    )
}
export default App;