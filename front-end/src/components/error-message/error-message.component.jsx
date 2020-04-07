import React from 'react';
import './error-message.styles.css';

const ErrorMessage = ({ name, message, isConfirmError, onConfirmError }) => {
  return (
    <div className="error-message" style={{ display: isConfirmError ? "none" : "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name} errror :(</h5>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-light" onClick={() => onConfirmError(name)}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;