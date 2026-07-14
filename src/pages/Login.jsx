import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Back from "../assets/back.png";
import Google from "../assets/google.png";
import useAuth from "../context/Hooks/AuthHook";
import { useState} from "react";
import { LoginReq } from "../services/backend/auth";
import { useSearchParams } from "react-router-dom";
import OtpVerify from "../components/Auth/OtpVerify";

function Login() {
  const [searchParams] = useSearchParams()
  const step = searchParams.get("step")
  const email = searchParams.get("email")
  const { user} = useAuth()

  if (user) {
    return (
      <Navigate to={"/dashboard"} />
    )
  } else {
    return (
      <>
        {step == "otp" ? <OtpVerify endpoint={"/auth/login/verify"} email={email} redirect={"/dashboard"}/> : <LoginComponent />}
      </>
    );
  }
}

const LoginComponent = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  

  async function HandleLogin() {
    try {
      const data = await LoginReq(email, password)
      console.log(data);
      if (data.success) {
        navigate(`/login?step=otp&email=${email}`) //!using email is temporary solution need to use token based verification
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
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

      <div className="max-w-md mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[32px] font-serif font-bold text-gray-900">
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
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            className="w-full h-16 px-6 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-orange-500"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-orange-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          type="button"
          className="w-full h-16 bg-[#FF9B51] rounded-full mt-6 text-black text-2xl font-bold font-serif  cursor-pointer"
          onClick={HandleLogin}
        >
          Login
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">
            or login with
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="w-16 h-16 cursor-pointer bg-white border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-md transition"
          >
            <img
              src={Google}
              alt="Google"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-10 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-semibold underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )

}



export default Login;