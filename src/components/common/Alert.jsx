import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="alert alert-info" role="alert">
      <strong>{message}</strong>
    </div>
  );
};

export default Alert;
