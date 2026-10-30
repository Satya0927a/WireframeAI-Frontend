import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Google from "../assets/google.png";
import useAuth from "../context/Hooks/AuthHook";
import { useState } from "react";
import { LoginReq } from "../services/backend/auth";
import OtpVerify from "../components/Auth/OtpVerify";
import { useToast } from "../components/Toast";
import { Eye, EyeOff } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";

function Login() {
  const [searchParams] = useSearchParams()
  const step = searchParams.get("step")
  const remember = searchParams.get("remember")
  const email = searchParams.get("email")
  const { user } = useAuth()

  if (user) {
    return (
      <Navigate to={"/dashboard"} />
    )
  } else {
    return (
      <>
        {step == "otp" ? <OtpVerify endpoint={"/auth/login/verify"} email={email} remember={remember == ""} redirect={"/dashboard"} /> : <LoginComponent />}
      </>
    );
  }
}

const LoginComponent = () => {
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)
  const [rememberMe, setrememberMe] = useState(false)


  async function HandleLogin(e) {
    e.preventDefault()
    try {
      const data = await LoginReq(email, password)
      if (data.success) {
        showToast(data.message, "success", "top-right")
        rememberMe ? navigate(`/login?step=otp&email=${email}&remember`) : navigate(`/login?step=otp&email=${email}`)
        // navigate(`/login?step=otp&email=${email}`) //!using email is temporary solution need to use token based verification
      }
    } catch (error) {
      const errorMsg = error.response?.data.message
      if (errorMsg) {
        showToast(errorMsg, "error", "top-right")
      }
      else {
        showToast("Some Error Occured", "error", "top-right")
      }
    }
  }
  return (
    <AuthShell
      title="Welcome back to Wireframe AI"
      onClick={() => navigate("/")}
      step={1}
      panelLabel="Login form"
      note={<>Don’t have an account? <Link to="/signup" className="auth-link auth-link--strong">Sign Up</Link></>}
    >
      <form className="auth-form" onSubmit={HandleLogin}>
        <div className="auth-field">
          <label className="auth-label" htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            required
            className="auth-input"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="login-password">Password</label>
          <div className="auth-field__control">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setpassword(e.target.value) }}
              required
              className="auth-input auth-input--reveal"
            />
            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="auth-reveal"
            >
              {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="auth-row">
          <label className="auth-check" htmlFor="login-remember">
            <input
              id="login-remember"
              name="remember"
              type="checkbox"
              onChange={() => {
                setrememberMe(!rememberMe);
              }}
            />
            Remember me
          </label>

          <Link to="/forgot-password" className="auth-link">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="auth-primary">
          Login
        </button>

        <p className="auth-or">or login with</p>

        <button type="button" className="auth-quiet">
          <img src={Google} alt="" width="18" height="18" />
          Google
        </button>
      </form>
    </AuthShell>
  )

}



export default Login;
