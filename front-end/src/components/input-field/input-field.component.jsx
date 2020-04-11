import React from 'react';
import './input-field.styles.css';

const InputField = ({ name, label, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={name}
      value={value}
      autoComplete="off"
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default InputField;