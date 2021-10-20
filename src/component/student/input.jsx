import React from "react";
import "./student.css";

const Input = ({ title, id, value, onChange, error, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={`edit__label ${error && "error"}`}>
        {title} *
      </label>
      <input
        id={id}
        className={`edit__input ${error && "error-input"}`}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <div className="error-message">Enter {title}</div>}
    </>
  );
};

export default Input;
