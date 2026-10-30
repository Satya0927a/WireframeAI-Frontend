import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Google from "../assets/google.png";
import useAuth from "../context/Hooks/AuthHook";
import { useState } from "react";
import { LoginReq } from "../services/backend/auth";
import OtpVerify from "../components/Auth/OtpVerify";
import { useToast } from "../components/Toast";
import { Eye, EyeOff } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";
import { AxiosError } from "axios";
import { errorRedirectHandler } from "../utils/errors/errorRedirect.config";

function Login() {
  const [searchParams] = useSearchParams()
  const step = searchParams.get("step")
  const { user, challenge } = useAuth()

  if (user) {
    return (
      <Navigate to={"/dashboard"} />
    )
  } else {
    return (
      <>
        {(step == "otp" && challenge.current) ? <OtpVerify redirect={"/dashboard"} challenge={challenge} /> : <LoginComponent challenge={challenge} />}
      </>
    );
  }
}

const LoginComponent = ({ challenge }) => {
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)
  const [rememberMe, setrememberMe] = useState(false)


  async function HandleLogin(e) {
    e.preventDefault()
    try {
      const data = await LoginReq(email, password, rememberMe)
      //eslint-disable-next-line
      challenge.current = data.challenge
      showToast(data.message, "success", "top-right")
      navigate(`/login?step=otp`)
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response.data
        showToast(data.message, "error", "top-right")
        if (data.redirectTo) {
          navigate(errorRedirectHandler(data.redirectTo));
        }
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
