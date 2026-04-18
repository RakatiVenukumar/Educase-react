import PropTypes from "prop-types";
LoginPage.propTypes = {};
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isReady || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      // Simulate error for demonstration
      if (email !== "user@example.com" || password !== "password123") {
        throw new Error("Invalid email or password.");
      }
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isReady = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-page">
      <h1>
        Sign in to your<br />PopX account
      </h1>
      <p className="subtitle">
        Enter your credentials to access your account.
      </p>
      <form onSubmit={handleSubmit} aria-label="Login form">
        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
          floating
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          floating
        />
        {error && <div style={{ color: "#e53e3e", marginBottom: 8 }}>{error}</div>}
        <Button
          type="submit"
          variant="primary"
          disabled={!isReady || isSubmitting}
          loading={isSubmitting}
          style={{ marginTop: 8 }}
          aria-label="Login"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
