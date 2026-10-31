import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { OtpVerifyReq, ResendOtpReq } from "../../services/backend/auth";
import useAuth from "../../context/Hooks/AuthHook";
import { useToast } from "../Toast";
import AuthShell from "./AuthShell";
import { AxiosError } from "axios";
import { errorRedirectHandler } from "../../utils/errors/errorRedirect.config";
import { LoaderCircle } from "lucide-react";

const OtpVerify = ({ redirect, challenge }) => {
  const navigate = useNavigate()
  const [otp, setotp] = useState(["", "", "", "", "", ""])
  const [verifying, setverifying] = useState(false)
  const [resending, setresending] = useState(false)
  const [resendIn, setresendIn] = useState(30)
  const verifyingRef = useRef(false)
  const resendingRef = useRef(false)
  const inputRefs = useRef([])
  const { setuser } = useAuth()
  const { showToast } = useToast()

  useEffect(() => {
    const timer = setInterval(() => {
      setresendIn((seconds) => (seconds > 0 ? seconds - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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
    if (verifyingRef.current) return
    verifyingRef.current = true
    setverifying(true)
    try {
      const data = await OtpVerifyReq(otp.join(""), challenge.current)
      showToast(data.message, "success", "top-right")
      setuser(data.data)
      navigate(redirect)
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data
        showToast(data?.message || "Could not verify the code. Try again.", "error", "top-right")
        if (data?.redirectTo) {
          navigate(errorRedirectHandler(data.redirectTo));
        }
      }
      else {
        console.error(error);
      }
    } finally {
      verifyingRef.current = false
      setverifying(false)
    }
  }

  async function HandleResend() {
    if (resendIn > 0 || resendingRef.current) return
    if (!challenge?.current) {
      showToast("Your code session expired. Please sign in again.", "error", "top-right")
      return
    }
    resendingRef.current = true
    setresending(true)
    try {
      await ResendOtpReq(challenge.current)
      showToast("A new code has been sent to your email.", "success", "top-right")
      setotp(["", "", "", "", "", ""])
      setresendIn(30)
      inputRefs.current[0]?.focus()
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data
        showToast(data?.message || "Could not resend the code. Try again.", "error", "top-right")
        if (data?.redirectTo) {
          navigate(errorRedirectHandler(data.redirectTo));
        }
      }
      else {
        showToast("Could not resend the code. Try again.", "error", "top-right")
        console.error(error);
      }
    } finally {
      resendingRef.current = false
      setresending(false)
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
        disabled={otp.join("").length !== 6 || verifying}
        aria-busy={verifying}
        className="auth-primary auth-verify"
        onClick={HandleVerify}
      >
        {verifying ? (
          <>
            <LoaderCircle className="auth-spinner" size={16} aria-hidden="true" />
            Verifying…
          </>
        ) : "Verify"}
      </button>

      <div className="auth-resend-row">
        <span>Didn’t get the code?</span>
        <button
          type="button"
          className="auth-resend"
          disabled={resendIn > 0 || resending}
          onClick={HandleResend}
        >
          {resending ? (
            <>
              <LoaderCircle className="auth-spinner" size={14} aria-hidden="true" />
              Sending…
            </>
          ) : resendIn > 0 ? `Resend in ${resendIn}s` : "Resend code"}
        </button>
      </div>
    </AuthShell>
  )
}

export default OtpVerify
