import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    if (!isReady || isSubmitting) return;

    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 800));
    navigate("/profile");
  };

  return (
    <div className="create-page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Full Name<span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <input
            type="text"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Phone number<span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <input
            type="tel"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Email address<span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <input
            type="email"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Password <span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <input
            type="password"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Company name</label>
          <input
            type="text"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Are you an Agency?<span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <div className="radio-group">
            {["yes", "no"].map((val) => (
              <label
                key={val}
                className="radio-option"
                onClick={() => handleChange("isAgency", val)}
              >
                <span className={`radio-circle ${form.isAgency === val ? "selected" : ""}`}>
                  {form.isAgency === val && <span className="radio-dot" />}
                </span>
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="form-flex-spacer" />

        <button
          type="submit"
          className="btn-primary"
          style={{ marginTop: "16px" }}
          disabled={!isReady || isSubmitting}
        >
          <span className="btn-content">
            {isSubmitting && <span className="btn-spinner" aria-hidden="true" />}
            {isSubmitting ? "Creating..." : "Create Account"}
          </span>
        </button>
      </form>
    </div>
  );
}
