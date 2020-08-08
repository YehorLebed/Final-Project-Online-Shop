import React from 'react';
import './input-field.styles.css';

const InputField = ({ type, options, name, label, value, onChange }) => {

  if (type === 'select') return (
    <div className="form-group" >
      <label htmlFor={name}>{label}</label>
      <select id={name} value={(value !== 0 && !value && "default") || value} className="form-control"
        onChange={e => onChange(e.target.value)}>
        <option key="default">Select...</option>
        {
          options.map(({ value, title }) => <option key={value} value={value}>{title}</option>)
        }
      </select>
    </div >
  )



  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        required
        id={name}
        type={['text', 'email', 'number', 'checkbox'].includes(name) ? name : 'text'}
        value={value}
        autoComplete="off"
        className="form-control"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;