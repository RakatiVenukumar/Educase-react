import React from "react";
import PropTypes from "prop-types";

export default function RadioGroup({ label, options, value, onChange, required = false }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span style={{ color: "#e53e3e" }}>*</span>}
      </label>
      <div className="radio-group">
        {options.map((opt) => (
          <label key={opt.value} className="radio-option">
            <span
              className={
                value === opt.value ? "radio-circle selected" : "radio-circle"
              }
            >
              {value === opt.value && <span className="radio-dot" />}
            </span>
            <input
              type="radio"
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              style={{ display: "none" }}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
