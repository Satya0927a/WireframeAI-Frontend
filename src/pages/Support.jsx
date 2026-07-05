import { Link } from "react-router-dom";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

function Support() {
    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-gray-50 px-6 pt-8">

            {/* Back Button */}
            <button
                type="button"
                onClick={() => navigate("/")}
                className="mb-16 cursor-pointer"
            >
                <img
                    src={Back}
                    alt="Back"
                    className="w-10 h-10"
                />
            </button>

            <div className=" max-w-md mx-auto">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-[40px] font-bold font-serif text-gray-900">
                        Contact Us
                    </h1>

                    <p className="text-[18px]">
                        Please feel free to contact us and we will get back to you as soon as we can.
                    </p>
                </div>

                {/* Form */}
                <div className="mt-8 space-y-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="password"
                        placeholder="What's this about?"
                        className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="password"
                        placeholder="Tell us more..."
                        className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <button className="w-full py-4 mt-3 rounded-full bg-[#FF9B51] border-t-2 border-white text-black text-2xl font-serif font-bold cursor-pointer">
                        Send Message
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Support;