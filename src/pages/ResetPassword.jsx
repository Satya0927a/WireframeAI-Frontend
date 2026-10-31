import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, CircleAlert, Eye, EyeOff, LoaderCircle, Minus } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";
import { ResetPasswordReq } from "../services/backend/auth";
import { AxiosError } from "axios";
import { useToast } from "../components/Toast";
import { errorRedirectHandler } from "../utils/errors/errorRedirect.config";

function readTokenFromHash() {
    const raw = window.location.hash.slice(1)
    if (!raw) return ""
    const params = new URLSearchParams(raw)
    for (const key of ["token", "session", "access_token"]) {
        if (params.has(key)) return params.get(key) || ""
    }
    try {
        return decodeURIComponent(raw)
    } catch {
        return raw
    }
}

function ResetPassword() {
    const navigate = useNavigate()
    const [token, settoken] = useState(readTokenFromHash)
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const [showNew, setshowNew] = useState(false)
    const [showConfirm, setshowConfirm] = useState(false)
    const [loading, setloading] = useState(false)
    const [success, setsuccess] = useState(false)
    const submitting = useRef(false)
    const { showToast } = useToast()

    useEffect(() => {
        function handleHashChange() {
            settoken(readTokenFromHash())
        }
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])

    const rules = [
        { key: "length", label: "At least 8 characters", met: password.length >= 8 },
        { key: "case", label: "Upper and lower case letters", met: /[a-z]/.test(password) && /[A-Z]/.test(password) },
        { key: "number", label: "At least one number", met: /\d/.test(password) },
        { key: "symbol", label: "At least one symbol", met: /[^A-Za-z\d]/.test(password) },
    ]
    const passwordValid = rules.every((rule) => rule.met)
    const mismatch = confirm.length > 0 && confirm !== password
    const canSubmit = passwordValid && confirm.length > 0 && !mismatch
    const hasToken = token.length > 0

    async function handleReset(e) {
        e.preventDefault()
        if (submitting.current || !canSubmit) return
        submitting.current = true
        setloading(true)
        try {
            await ResetPasswordReq(password, token)
            window.history.replaceState(null, "", window.location.pathname)
            setsuccess(true)
        } catch (error) {
            if (error instanceof AxiosError) {
                const data = error.response?.data
                showToast(data?.message || "Could not reset your password. Try again.", "error", "top-right")
                if (data?.redirectTo) {
                    navigate(errorRedirectHandler(data.redirectTo));
                }
            }
            else {
                console.error(error);
                showToast("Could not reset your password. Try again.", "error", "top-right")
            }
        } finally {
            submitting.current = false
            setloading(false)
        }
    }

    const title = success ? "Password updated" : hasToken ? "Set a new password" : "Reset link unavailable"
    const note = success
        ? "Your new password is active. Use it the next time you sign in."
        : hasToken
            ? "Choose a new password for your account. This link can only be used once."
            : "This link is missing its reset token. Request a new link to continue."

    return (
        <AuthShell
            title={title}
            note={note}
            onClick={() => navigate("/login")}
            showSteps={false}
            panelLabel={success ? "Password reset successful" : hasToken ? "Reset password form" : "Reset link unavailable"}
        >
            {success ? (
                <div className="auth-state" role="status">
                    <span className="auth-state__mark auth-state__mark--success">
                        <Check size={20} aria-hidden="true" />
                    </span>
                    <h2 className="auth-state__title">Password set successfully</h2>
                    <p className="auth-state__text">
                        You can now log in with your new password.
                    </p>
                    <Link to="/login" className="auth-primary">
                        Back to login
                    </Link>
                </div>
            ) : hasToken ? (
                <form className="auth-form" onSubmit={handleReset}>
                    <div className="auth-field">
                        <label className="auth-label" htmlFor="reset-password">New password</label>
                        <div className="auth-field__control">
                            <input
                                id="reset-password"
                                name="new-password"
                                type={showNew ? "text" : "password"}
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                minLength={8}
                                required
                                disabled={loading}
                                aria-describedby="reset-rules"
                                className="auth-input auth-input--reveal"
                            />
                            <button
                                type="button"
                                onClick={() => setshowNew(!showNew)}
                                aria-label={showNew ? "Hide password" : "Show password"}
                                aria-pressed={showNew}
                                disabled={loading}
                                className="auth-reveal"
                            >
                                {showNew ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                            </button>
                        </div>
                    </div>

                    <div className="auth-field">
                        <label className="auth-label" htmlFor="reset-confirm">Confirm new password</label>
                        <div className="auth-field__control">
                            <input
                                id="reset-confirm"
                                name="confirm-password"
                                type={showConfirm ? "text" : "password"}
                                autoComplete="new-password"
                                value={confirm}
                                onChange={(e) => setconfirm(e.target.value)}
                                required
                                disabled={loading}
                                aria-invalid={mismatch}
                                aria-describedby={mismatch ? "reset-confirm-error" : undefined}
                                className="auth-input auth-input--reveal"
                            />
                            <button
                                type="button"
                                onClick={() => setshowConfirm(!showConfirm)}
                                aria-label={showConfirm ? "Hide password" : "Show password"}
                                aria-pressed={showConfirm}
                                disabled={loading}
                                className="auth-reveal"
                            >
                                {showConfirm ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                            </button>
                        </div>
                        {mismatch ? (
                            <p className="auth-error" id="reset-confirm-error" role="alert">
                                Passwords do not match.
                            </p>
                        ) : null}
                    </div>

                    <ul className="auth-rules" id="reset-rules" aria-label="Password requirements">
                        {rules.map((rule) => (
                            <li
                                key={rule.key}
                                className={rule.met ? "is-met" : undefined}
                                aria-label={`${rule.met ? "Met" : "Not met"}: ${rule.label}`}
                            >
                                {rule.met ? <Check size={14} aria-hidden="true" /> : <Minus size={14} aria-hidden="true" />}
                                {rule.label}
                            </li>
                        ))}
                    </ul>

                    <button type="submit" className="auth-primary" disabled={loading || !canSubmit} aria-busy={loading}>
                        {loading ? (
                            <>
                                <LoaderCircle className="auth-spinner" size={16} aria-hidden="true" />
                                Resetting…
                            </>
                        ) : "Reset password"}
                    </button>
                </form>
            ) : (
                <div className="auth-state auth-state--error" role="status">
                    <span className="auth-state__mark">
                        <CircleAlert size={20} aria-hidden="true" />
                    </span>
                    <h2 className="auth-state__title">This link can’t be used</h2>
                    <p className="auth-state__text">
                        Reset links are single-use and expire after 15 minutes. Request a fresh link to continue.
                    </p>
                    <Link to="/forgot-password" className="auth-primary">
                        Request a new link
                    </Link>
                    <Link to="/login" className="auth-link">
                        Back to login
                    </Link>
                </div>
            )}
        </AuthShell>
    )
}

export default ResetPassword;
