import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

  return (
    
    <div className="mt-35 flex items-center justify-center px-6 background">
       <button
        onClick={() => navigate("/")}
        className="absolute top-18 left-6"
      >
        <img src={Back} alt="Back" className="w-43px h-43px" />
      </button>
        
      <div className="w-full max-w-md">
        
        {/* Heading */}
        <div className="text-center font-serif">
          <h1 className="text-[35px] font-bold text-white">
            Create an Account
          </h1>

          <p className=" text-white text-[18px]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-8 py-5 rounded-full bg-[#262626] border-t-2 border-white text-white"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-8 py-5 rounded-full bg-[#262626] border-t-2 border-white text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-8 py-5 rounded-full bg-[#262626] border-t-2 border-white text-white"
          />

          <button className="w-full py-4 mt-3 rounded-full bg-[#FF9B51] border-t-2 border-white text-black text-2xl font-serif font-bold">
            Continue
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400">
            or sign up with
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="w-16 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaXTwitter className="text-white text-3xl" />
          </button>

          <button className="w-16 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaGoogle className="text-3xl text-white" />
          </button>

          <button className="w-16 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaGithub className="text-white text-3xl" />
          </button>
        </div>

     <div className="text-white text-[13px] mt-30 text-center">
  By clicking on continue you agree to recognotes <br /> our{" "}
  <Link
    to="/term"
    className="text-orange-400 underline"
  >
    Terms of Use
  </Link>{" "}
  and{" "}
  <Link
    to="/privacy"
    className="text-orange-400 underline"
  >
    Privacy Policy
  </Link>
</div>
      </div>
    </div>
  );
}

export default Signup;