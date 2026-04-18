import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isReady || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    navigate("/profile");
  };

  const isReady = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-page">
      <h1>
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Email Address</label>
          <input
            type="email"
            className="form-input form-input--floating"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Password</label>
          <input
            type="password"
            className="form-input form-input--floating"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={!isReady || isSubmitting}
          style={{ marginTop: "8px" }}
        >
          <span className="btn-content">
            {isSubmitting && <span className="btn-spinner" aria-hidden="true" />}
            {isSubmitting ? "Logging in..." : "Login"}
          </span>
        </button>
      </form>
    </div>
  );
}
