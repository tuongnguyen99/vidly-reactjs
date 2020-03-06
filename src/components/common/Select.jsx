import React from "react";

const Select = ({ name, label, options, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        <option></option>
        {options.map(option => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="alert alert-danger my-1" role="alert">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  );
};

export default Select;
