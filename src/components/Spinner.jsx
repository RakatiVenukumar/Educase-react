import React from "react";
import PropTypes from "prop-types";

export default function Spinner({ dark = false, right = false }) {
  let className = "btn-spinner";
  if (dark) className += " btn-spinner--dark";
  if (right) className += " btn-spinner--right";
  return <span className={className} aria-hidden="true" />;
}

Spinner.propTypes = {
  dark: PropTypes.bool,
  right: PropTypes.bool,
};
