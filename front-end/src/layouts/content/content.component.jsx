import React from 'react';

import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, CartPage, ItemPage, SignPage, AdminAddItemPage, AdminOrderPage, OrderPage } from '../../pages';
import { ErrorList } from '../../components';
import './content.styles.css';

const Content = ({ isLoggedIn }) => (
  <div className="content container">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/item/:id" component={ItemPage} />

      <Route exact path="/sign" render={() => !isLoggedIn ? <SignPage /> : <Redirect to="/" />} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/orders" children={<OrderPage />} />

      <Route exact path="/admin/add-item" component={AdminAddItemPage} />
      <Route exact path="/admin/orders" children={<AdminOrderPage />} />
    </Switch>
    <ErrorList />
  </div>
);

const mapStateToProps = state => ({
  isLoggedIn: !!(state.userData && state.userData.userInfo)
});

export default connect(mapStateToProps)(Content);