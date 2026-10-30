import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Google from "../assets/google.png";
import useAuth from "../context/Hooks/AuthHook";
import { SignupReq } from "../services/backend/auth";
import { useState } from "react";
import OtpVerify from "../components/Auth/OtpVerify";
import { useToast } from "../components/Toast";
import { Eye, EyeOff } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";
import { AxiosError } from "axios";
import { errorRedirectHandler } from "../utils/errors/errorRedirect.config";

function Signup() {
  const [searchparams] = useSearchParams()
  const step = searchparams.get('step')
  const navigate = useNavigate();
  const { user, challenge } = useAuth()
  if (user) {
    return <Navigate to={"/dashboard"} />
  } else {
    return (
      <>
        {step == 'otp' && challenge.current ?
          <OtpVerify redirect={"/dashboard"} challenge={challenge} /> : <SignupForm navigate={navigate} challenge={challenge} />}
      </>
    );
  }
}

const SignupForm = ({ navigate, challenge }) => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)
  const { showToast } = useToast()

  async function handleSignup(e) {
    e.preventDefault()
    try {
      const data = await SignupReq(name, email, password);
      //eslint-disable-next-line
      challenge.current = data.challenge;
      showToast(data.message, "success", "top-right");
      navigate(`/signup?step=otp`);
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response.data
        showToast(data.message, "error", "top-right")
        if (data.redirectTo) {
          navigate(errorRedirectHandler(data.redirectTo));
        }
      }
      else {
        showToast("Some error occured", "error", "top-right")
        console.error(error);
      }
    }
  }

  return (
    <AuthShell
      title="Create an Account"
      onClick={() => navigate("/")}
      step={1}
      panelLabel="Sign up form"
      note={<>Already have an account? <Link to="/login" className="auth-link auth-link--strong">Login</Link></>}
    >
      <form className="auth-form" onSubmit={handleSignup}>
        <div className="auth-field">
          <label className="auth-label" htmlFor="signup-name">Enter Name</label>
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter Name"
            value={name ? name : ""}
            onChange={e => setname(e.target.value)}
            minLength={5}
            required
            className="auth-input"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={email ? email : ""}
            onChange={e => setemail(e.target.value)}
            required
            className="auth-input"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="signup-password">Password</label>
          <div className="auth-field__control">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password ? password : ""}
              onChange={e => setpassword(e.target.value)}
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

        <button className="auth-primary" type="submit">
          Continue
        </button>

        <p className="auth-or">or sign up with</p>

        <button type="button" className="auth-quiet">
          <img src={Google} alt="" width="18" height="18" />
          Google
        </button>
      </form>

      <p className="auth-legal">
        By clicking on continue you agree to recognotes our{" "}
        <Link to="/term" className="auth-link">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="auth-link">
          Privacy Policy
        </Link>
      </p>
    </AuthShell>
  )
}
export default Signup;
