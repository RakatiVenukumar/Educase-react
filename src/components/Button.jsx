import React from "react";
import PropTypes from "prop-types";

export default function Button({ type = "button", variant = "primary", disabled, loading, children, onClick, ...props }) {
  const className = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <button
      type={type}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <span className="btn-content btn-content--overlay-right">
        <span className="btn-text">{children}</span>
        {loading && (
          <span
            className={
              variant === "secondary"
                ? "btn-spinner btn-spinner--dark btn-spinner--right"
                : "btn-spinner btn-spinner--right"
            }
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
