import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Back from "../assets/back.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className=" px-6 pt-8 background">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-16"
      >
        <img
          src={Back}
          alt="Back"
          className="w-10 h-10"
        />
      </button>

      <div className="max-w-md mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-white text-[32px] font-serif font-bold">
            Welcome back to
            <br />
            Wireframe AI
          </h1>
        </div>

        {/* Inputs */}
        <div className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-16 px-6 rounded-full bg-[#262626] border-t-2 border-white text-[#BFBFBF]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-16 px-6 rounded-full bg-[#262626] border-t-2 border-white text-[#BFBFBF]"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mt-4 text-[#BFBFBF] text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox"/>
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="underline text-[#BFBFBF]"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="w-full h-16 bg-[#FF9B51] border-t-2 border-white rounded-full mt-6 text-black text-2xl font-bold font-serif hover:scale-105 transition-all"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-10">
          <div className="flex-1 h-[1px] bg-gray-500"></div>
          <span className="text-gray-400 text-sm">
            or login with
          </span>
          <div className="flex-1 h-[1px] bg-gray-500"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-20 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaXTwitter className="text-white text-3xl" />
          </button>

          <button className="w-20 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaGoogle className="text-3xl text-white" />
          </button>

          <button className="w-20 h-16 border border-white rounded-2xl flex items-center justify-center">
            <FaGithub className="text-white text-3xl" />
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-10 text-center text-white text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 font-semibold underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;