import React from "react";

export default ({ onClick }) => (
  <div
    className="alert alert-warning alert-dismissible fade show"
    role="alert"
    onClick={onClick}
  >
    <strong>An error occured!</strong> You should try that again.
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>
);
