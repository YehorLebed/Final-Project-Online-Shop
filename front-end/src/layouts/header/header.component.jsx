import React, { useEffect } from 'react';

import { actionLogout } from '../../redux/user/auth.actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FilterInput } from '../../components';
import './header.styles.css';

const Header = ({ user, onLogout }) => {

  let userStatusField;
  if (user && user.role === 'customer')
    userStatusField = (<>
      <Link to="/cart"><button className="btn btn-dark">Cart</button></Link>
      <Link to="/orders" className="btn btn-dark">My Orders</Link>
      <span>{user.login}</span>
      <button onClick={onLogout} className="btn btn-danger">Logout</button>
    </>);

  else if (user && user.role === 'admin')
    userStatusField = (<>
      <span>Admin:</span>
      <Link to="/admin/notebook-properties" className="btn btn-dark">Notebook Properties</Link>
      <Link to="/admin/add-item" className="btn btn-dark">Add notebook</Link>
      <Link to="/admin/orders" className="btn btn-dark">Orders</Link>
      <button onClick={onLogout} className="btn btn-danger">Logout</button>
    </>);

  else userStatusField = (<>
    <Link to="/cart"><button className="btn btn-dark">Cart</button></Link>
    <Link to="/sign" className="btn btn-dark">Login/Register</Link>
  </>)

  return (
    <header className="header sticky-top">
      <nav className="container">
        <Link to="/"><h3 className="logo">Online Store</h3></Link>
        <FilterInput />
        {userStatusField}
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({ user: state.userData && state.userData.userInfo });
const mapDispatchToProps = { onLogout: actionLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

/*
        <span>Admin:</span>
        <Link to="/admin/add-item"><button className="btn btn-dark">New Item</button></Link>
        <Link to="/admin/orders"><button className="btn btn-danger">Manage Orders</button></Link>
*/
