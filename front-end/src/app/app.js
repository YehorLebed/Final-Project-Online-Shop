import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header, Content, Footer } from '../layouts';
import { authLogin } from '../redux/user/auth.actions';
import { actionSetSavedCart } from '../redux/cart/cart.actions';
import { Redirect } from 'react-router-dom';
import { Page404 } from '../pages';


const App = ({ onLoadAuth, onLoadSetCart }) => {

  useEffect(() => {
    const token = localStorage.authToken;
    const cart = localStorage.cart && JSON.parse(localStorage.cart);
    if (token) onLoadAuth(token);
    if (cart) onLoadSetCart(cart);
  }, [])

  return (
    <div className="app" >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = {
  onLoadAuth: authLogin,
  onLoadSetCart: actionSetSavedCart
};

export default connect(null, mapDispatchToProps)(App);