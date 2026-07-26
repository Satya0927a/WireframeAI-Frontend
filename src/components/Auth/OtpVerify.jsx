import { useRef, useState } from "react"
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom"
import Back from "../../assets/back.png";
import { OtpVerifyReq } from "../../services/backend/auth";
import useAuth from "../../context/Hooks/AuthHook";
import { useToast } from "../Toast";

const OtpVerify = ({ email, endpoint, redirect ,remember}) => {
  const navigate = useNavigate()
  const [otp, setotp] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef([])
  const { setuser } = useAuth()
  const {showToast} = useToast()

  function handleChange(index, value) {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value.replace(/[^0-9]/g, "")
    setotp(newOtp)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  function handlePaste(e) {
    e.preventDefault()
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6)
    const newOtp = [...otp]
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || ""
    }
    setotp(newOtp)
    const nextEmpty = pasted.length < 6 ? pasted.length : 5
    inputRefs.current[nextEmpty]?.focus()
  }

  async function HandleVerify() {
    try {
      const data = await OtpVerifyReq(email, otp.join("") ,remember, endpoint )
      if (data.success) {
        showToast(data.message, "success", "top-right")
        setuser(data.data)
        navigate(redirect)
      }
    } catch (error) {
      const data = error.response?.data
      if (data) {
        const action = data.action
        if (action == "REDIRECTBACK") {
          showToast(data.message, "error", "top-right")
          navigate("/login")
        }
        else if (action == "ERROR") {
          showToast(data.message, "error", "top-right")
          setotp(["", "", "", "", "", ""])
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-8">
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="mb-16 cursor-pointer"
      >
        <img src={Back} alt="Back" className="w-10 h-10" />
      </button>

      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-[32px] font-serif font-bold text-gray-900">
            Verify OTP
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-14 h-16 text-center text-xl font-bold rounded-xl bg-white border border-gray-300 text-gray-800 outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          type="button"
          disabled={otp.join("").length !== 6}
          className="w-full h-16 bg-[#FF9B51] rounded-full mt-8 text-black text-2xl font-bold font-serif cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={HandleVerify}
        >
          Verify
        </motion.button>
      </div>
    </div>
  )
}

export default OtpVerify