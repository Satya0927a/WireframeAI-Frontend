import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { LoaderCircle, MailCheck } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";
import { ForgotPasswordReq } from "../services/backend/auth";
import { useToast } from "../components/Toast";
import { errorRedirectHandler } from "../utils/errors/errorRedirect.config";

function Forgot() {
    const [email, setemail] = useState("")
    const [loading, setloading] = useState(false)
    const [sent, setsent] = useState(false)
    const submitting = useRef(false)
    const navigate = useNavigate()
    const { showToast } = useToast()

    async function handleForgot(e) {
        e.preventDefault()
        if (submitting.current) return
        submitting.current = true
        setloading(true)
        try {
            await ForgotPasswordReq(email)
            setsent(true)
        } catch (error) {
            if (error instanceof AxiosError) {
                const data = error.response?.data
                showToast(data?.message || "Could not send the reset instructions. Try again.", "error", "top-right")
                if (data?.redirectTo) {
                    navigate(errorRedirectHandler(data.redirectTo));
                }
            }
            else {
                showToast("Could not send the reset instructions. Try again.", "error", "top-right")
                console.error(error);
            }
        } finally {
            submitting.current = false
            setloading(false)
        }
    }

    return (
        <AuthShell
            title="Forgot Password?"
            note="Enter your email address and we’ll send you password reset instructions."
            onClick={() => navigate("/")}
            showSteps={false}
            panelLabel="Password reset"
        >
            {sent ? (
                <div className="auth-state" role="status">
                    <span className="auth-state__mark">
                        <MailCheck size={20} aria-hidden="true" />
                    </span>
                    <h2 className="auth-state__title">Check your inbox</h2>
                    <p className="auth-state__text">
                        We sent password reset instructions to{" "}
                        <strong className="auth-state__email">{email}</strong>.
                    </p>
                    <Link to="/login" className="auth-link auth-link--strong">
                        Back to login
                    </Link>
                </div>
            ) : (
                <form className="auth-form" onSubmit={handleForgot}>
                    <div className="auth-field">
                        <label className="auth-label" htmlFor="forgot-email">Email address</label>
                        <input
                            id="forgot-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                            className="auth-input"
                        />
                    </div>

                    <button type="submit" className="auth-primary" disabled={loading} aria-busy={loading}>
                        {loading ? (
                            <>
                                <LoaderCircle className="auth-spinner" size={16} aria-hidden="true" />
                                Sending…
                            </>
                        ) : "Send reset link"}
                    </button>

                    <p className="auth-form-alt">
                        <Link to="/login" className="auth-link">Back to login</Link>
                    </p>
                </form>
            )}
        </AuthShell>
    )
}
export default Forgot;
