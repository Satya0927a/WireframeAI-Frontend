import { Link, Navigate, useSearchParams } from "react-router-dom";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
import Google from "../assets/google.png";
import useAuth from "../context/Hooks/AuthHook";
import { SignupReq } from "../services/backend/auth";
import { useState } from "react";
import OtpVerify from "../components/Auth/OtpVerify";
import { useToast } from "../components/Toast";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [searchparams] = useSearchParams()
  const step = searchparams.get('step')
  const email = searchparams.get('email')
  const navigate = useNavigate();
  const { user } = useAuth()
  if (user) {
    return <Navigate to={"/dashboard"} />
  } else {
    return (
      <>
        {step == 'otp' ?
          <OtpVerify email={email} endpoint={"/auth/signup/verify"} redirect={"/dashboard"} /> : <SignupForm navigate={navigate} />}
      </>
    );
  }
}

const SignupForm = ({ navigate }) => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)
  const { showToast } = useToast()

  async function handleSignup(e) {
    e.preventDefault()
    try {
      const data = await SignupReq(name, email, password)
      if (data.success) {
        showToast(data.message, "success", "top-right")
        navigate(`/signup?step=otp&email=${email}`)
      }
    } catch (error) {
      const data = error.response?.data
      data ? showToast(data.message, "error", "top-right") : showToast("Some error occured", "error", "top-right");
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

      <div className=" max-w-md mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[35px] font-bold font-serif text-gray-900">
            Create an Account
          </h1>

          <p className=" text-[15px]">
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
        <form className="mt-8 space-y-5" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name ? name : ""}
            onChange={e => setname(e.target.value)}
            minLength={5}
            required
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email ? email : ""}
            onChange={e => setemail(e.target.value)}
            required
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password ? password : ""}
              onChange={e => setpassword(e.target.value)}
              required
              className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          <button className="w-full py-4 mt-3 rounded-full bg-[#FF9B51] border-t-2 border-white 
          text-black text-2xl font-serif font-bold cursor-pointer"
            type="submit"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-500">
            or sign up with
          </span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
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

        <div className=" text-[13px] mt-30 text-center">
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
  )
}
export default Signup;