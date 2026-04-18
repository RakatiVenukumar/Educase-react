import React from "react";
import PropTypes from "prop-types";

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  floating = false,
  ...props
}) {
  return (
    <div className={floating ? "form-group form-group--floating" : "form-group"}>
      <label className={floating ? "form-label form-label--floating" : "form-label"}>
        {label}
        {required && <span style={{ color: "#e53e3e" }}>*</span>}
      </label>
      <input
        type={type}
        className={floating ? "form-input form-input--floating" : "form-input"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  floating: PropTypes.bool,
};
