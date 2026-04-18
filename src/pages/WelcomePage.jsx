import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [loadingTo, setLoadingTo] = useState(null); // "signup" | "login" | null

  const go = async (to) => {
    if (loadingTo) return;
    setLoadingTo(to);
    await new Promise((r) => setTimeout(r, 500));
    navigate(to === "signup" ? "/signup" : "/login");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-spacer" />
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <button className="btn-primary" disabled={!!loadingTo} onClick={() => go("signup")}>
          <span className="btn-content btn-content--overlay-right">
            <span className="btn-text">Create Account</span>
            {loadingTo === "signup" && <span className="btn-spinner btn-spinner--right" aria-hidden="true" />}
          </span>
        </button>
        <button className="btn-secondary" disabled={!!loadingTo} onClick={() => go("login")}>
          <span className="btn-content btn-content--overlay-right">
            <span className="btn-text">Already Registered? Login</span>
            {loadingTo === "login" && (
              <span className="btn-spinner btn-spinner--dark btn-spinner--right" aria-hidden="true" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
