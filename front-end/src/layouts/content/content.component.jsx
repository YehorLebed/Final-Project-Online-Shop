import React from 'react';

import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, CartPage, ItemPage, SignPage } from '../../pages';
import { ErrorList } from '../../components';
import './content.styles.css';

const Content = ({ isLoggedIn }) => (
  <div className="content container-fluid">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/item/:id" component={ItemPage} />

      <Route exact path="/sign" render={() => !isLoggedIn ? <SignPage /> : <Redirect to="/" />} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
    <ErrorList />
  </div>
);

const mapStateToProps = state => ({
  isLoggedIn: !!(state.userData && state.userData.userInfo)
});

export default connect(mapStateToProps)(Content);