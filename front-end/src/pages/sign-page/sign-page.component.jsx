import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionLogin, actionRegistrationAndLogin } from '../../redux/user/auth.actions';
import './sign-page.styles.css';

const SignPage = ({ onLogin, onRegistration }) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="sign-page">
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input type="login" className="form-control" id="login" autoComplete="off"
          value={login} onChange={(e) => setLogin(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button className="btn btn-primary" onClick={() => onLogin(login, password)}>Login</button>
      <button className="btn btn-warning" onClick={() => onRegistration({ login, password })}>Register</button>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: actionLogin,
  onRegistration: actionRegistrationAndLogin
}


export default connect(null, mapDispatchToProps)(SignPage);