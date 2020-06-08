import React from 'react';
import './input-field.styles.css';

const InputField = ({ name, label, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      required
      id={name}
      type={['text', 'email', 'number', 'checkbox'].includes(name) ? name : 'text'}
      value={value}
      autoComplete="off"
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default InputField;