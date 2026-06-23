import Back from "../assets/back.png"
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

function Forgot() {
    return (
        <section className="min-h-screen px-6 pt-8 mt-40">

            <div className="max-w-md mx-auto">

                <div className="text-center">
                    <h1 className="text-[32px] font-bold font-serif">
                        Forgot Password?
                    </h1>
                    <p>Enter your email address and we'll send you a code to reset your password.</p>
                </div>

                <div className="mt-8 space-y-5">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full h-16 px-6 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Reset Button */}
                <button
                    type="button"
                    className="w-full h-16 bg-[#FF9B51] rounded-full mt-6 text-black font-bold font-serif text-[18px] hover:scale-105 transition-all cursor-pointer"
                >
                    Send Reset Code
                </button>
                
                {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-500 text-sm">
            Or
          </span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
                <div className="text-center mt-4">
                    
                    <Link
                        to="/login"
                        className="inline-flex items-center hover:underline"
                    >
                         <FaAngleLeft />
                        Back to login
                    </Link>

                </div>

            </div>
        </section>
    )
}
export default Forgot;