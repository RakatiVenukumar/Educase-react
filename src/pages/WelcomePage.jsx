import PropTypes from "prop-types";
WelcomePage.propTypes = {};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

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
          Experience seamless onboarding and account management.<br />
          Join us or sign in to continue.
        </p>
        <Button
          variant="primary"
          disabled={!!loadingTo}
          loading={loadingTo === "signup"}
          aria-label="Create Account"
          onClick={() => go("signup")}
        >
          Create Account
        </Button>
        <Button
          variant="secondary"
          disabled={!!loadingTo}
          loading={loadingTo === "login"}
          aria-label="Already Registered? Login"
          onClick={() => go("login")}
          style={{ marginTop: 12 }}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
