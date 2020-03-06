import React from "react";

const Input = ({ label, name, error, onChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        name={name}
        id={name}
        onChange={onChange}
        {...rest}
      />
      {error && (
        <div className="alert alert-danger my-1" role="alert">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  );
};

export default Input;
