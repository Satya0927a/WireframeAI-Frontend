import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const steps = ["Credentials", "Verify"];

function StepRail({ step }) {
  return (
    <ol className="auth-steps" aria-label="Account steps">
      {steps.map((label, index) => {
        const number = index + 1;
        const state = number === step ? "is-current" : number < step ? "is-done" : "";
        return (
          <li
            key={label}
            className={state}
            aria-current={number === step ? "step" : undefined}
          >
            <span className="auth-step__num" aria-hidden="true">{number}</span>
            {label}
          </li>
        );
      })}
    </ol>
  );
}

function AuthShell({ title, note, step = 1, showSteps = true, onClick, panelLabel, children }) {
  return (
    <div className="auth-page">
      <a className="auth-skip" href="#auth-main">Skip to content</a>

      <header className="auth-top">
        <div className="auth-wrap auth-top__inner">
          <Link to="/" className="auth-mark">Wireframe AI</Link>
          <button
            type="button"
            onClick={onClick}
            className="auth-back"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back
          </button>
        </div>
      </header>

      <main id="auth-main" className="auth-wrap auth-main">
        <section className="auth-intro" aria-labelledby="auth-title">
          <h1 className="auth-title" id="auth-title">{title}</h1>
          {note ? <p className="auth-note">{note}</p> : null}
          {showSteps ? <StepRail step={step} /> : null}
        </section>

        <section className="auth-panel" aria-label={panelLabel}>
          {children}
        </section>
      </main>
    </div>
  );
}

export default AuthShell;
