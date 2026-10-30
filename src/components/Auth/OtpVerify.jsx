import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { OtpVerifyReq } from "../../services/backend/auth";
import useAuth from "../../context/Hooks/AuthHook";
import { useToast } from "../Toast";
import AuthShell from "./AuthShell";

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
    <AuthShell
      title="Verify OTP"
      note="Enter the 6-digit code sent to your email"
      step={2}
      onClick={() => navigate("/login")}
      panelLabel="Verify your email"
    >
      <div className="auth-code" role="group" aria-label="One-time passcode">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            aria-label={`Digit ${index + 1}`}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
          />
        ))}
      </div>

      <button
        type="button"
        disabled={otp.join("").length !== 6}
        className="auth-primary auth-verify"
        onClick={HandleVerify}
      >
        Verify
      </button>
    </AuthShell>
  )
}

export default OtpVerify
