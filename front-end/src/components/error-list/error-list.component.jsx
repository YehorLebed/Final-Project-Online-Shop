import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { actionConfirmError } from '../../redux/error/error.actions';
import ErrorMessage from '../error-message/error-message.component';

import './error-list.styles.css';

const ErrorList = ({ errors, onConfirmError }) => {

  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    const idxErrorNotConfirm = errors.findIndex(err => err.isConfirmError === false);
    idxErrorNotConfirm !== -1 ? setHidden(false) : setHidden(true);
  }, [errors]);

  return (
    <div className="error-list" style={{ display: isHidden ? "none" : "block" }}>
      {errors.map(errInfo =>
        <ErrorMessage
          key={errInfo.name}
          {...errInfo}
          onConfirmError={onConfirmError}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = {
  onConfirmError: actionConfirmError
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorList);
