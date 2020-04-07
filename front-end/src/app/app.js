import React, { useEffect } from 'react';

import { authLogin } from '../redux/user/auth.actions';
import { connect } from 'react-redux';
import { Header, Content, Footer } from '../layouts';



const App = ({ onLoadAuth }) => {

  useEffect(() => {
    const token = localStorage.authToken;
    if (token) onLoadAuth(token);
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
  onLoadAuth: authLogin
};

export default connect(null, mapDispatchToProps)(App);