import React from 'react';

import { actionLogout } from '../../redux/user/auth.actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { SearchForm } from '../../components';
import './header.styles.css';

const Header = ({ userLogin, onLogout }) => {

  const userStatusField = userLogin
    ? (<><span>{userLogin}</span><button onClick={onLogout} className="btn btn-warning">Logout</button></>)
    : (<Link to="/sign"><button className="btn btn-warning">Login/Register</button></Link>)

  return (
    <header className="header sticky-top">
      <nav className="container">
        <Link to="/"><h3 className="logo">Online Store</h3></Link>
        <SearchForm />
        {userStatusField}
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.userData && state.userData.userInfo && state.userData.userInfo.login
});
const mapDispatchToProps = {
  onLogout: actionLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
