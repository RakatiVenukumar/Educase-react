import PropTypes from "prop-types";
CreateAccountPage.propTypes = {};
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import RadioGroup from "../components/RadioGroup";

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isReady = useMemo(() => {
    return (
      form.fullName.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password.trim() !== "" &&
      (form.isAgency === "yes" || form.isAgency === "no")
    );
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isReady || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      // Simulate error for demonstration
      if (!form.email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-page">
      <h1>
        Create your<br />PopX account
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", flex: 1 }} aria-label="Create account form">
        <InputField
          label="Full Name"
          type="text"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="John Doe"
          required
          floating
        />
        <InputField
          label="Phone number"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="123-456-7890"
          required
          floating
        />
        <InputField
          label="Email address"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="user@example.com"
          required
          floating
        />
        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="Enter password"
          required
          floating
        />
        <InputField
          label="Company name"
          type="text"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
          placeholder="Company Inc."
          floating
        />
        <RadioGroup
          label="Are you an Agency?"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          value={form.isAgency}
          onChange={(val) => handleChange("isAgency", val)}
          required
        />
        {error && <div style={{ color: "#e53e3e", marginBottom: 8 }}>{error}</div>}
        <Button
          type="submit"
          variant="primary"
          disabled={!isReady || isSubmitting}
          loading={isSubmitting}
          aria-label="Create Account"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
}
