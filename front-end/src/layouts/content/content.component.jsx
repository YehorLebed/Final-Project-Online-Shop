import React from 'react';

import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, CartPage, ItemPage, SignPage, OrderPage, Page404 } from '../../pages';
import { AdminAddItemPage, AdminOrderPage, ManageNotebookProperties, ManageNotebookPropertiesMenu, AdminManageNotebook } from '../../pages/admin';
import { ErrorList } from '../../components';
import './content.styles.css';

const Content = ({ isLoggedIn, isAdmin }) => (
  <div className="content container">
    <Switch>
      <Route exact path="/" children={<HomePage />} />
      <Route exact path="/item/:id" children={<ItemPage />} />

      <Route exact path="/cart" children={<CartPage />} />
      <Route exact path="/orders" children={<OrderPage />} />
      <Route exact path="/sign" render={() => !isLoggedIn ? <SignPage /> : <Redirect to="/" />} />

      {
        isAdmin && (<>
          <Route exact path="/admin/orders" children={<AdminOrderPage />} />
          <Route exact path="/admin/add-item" children={<AdminAddItemPage />} />
          <Route exact path="/admin/notebook/:id" children={<AdminManageNotebook />} />

          <Route exact path="/admin/notebook-properties" children={<ManageNotebookPropertiesMenu />} />
          <Route exact path="/admin/notebook-properties/ram" children={<ManageNotebookProperties type="ram" />} />
          <Route exact path="/admin/notebook-properties/rom" children={<ManageNotebookProperties type="rom" />} />
          <Route exact path="/admin/notebook-properties/battery" children={<ManageNotebookProperties type="battery" />} />
          <Route exact path="/admin/notebook-properties/display" children={<ManageNotebookProperties type="display" />} />
          <Route exact path="/admin/notebook-properties/processor" children={<ManageNotebookProperties type="processor" />} />
        </>)
      }

      <Route path="/" children={<Page404 />} />

    </Switch>
    <ErrorList />
  </div>
);

const mapStateToProps = state => ({
  isLoggedIn: state.userData && state.userData.userInfo,
  isAdmin: (state.userData && state.userData.userInfo && state.userData.userInfo.role === 'admin')
});

export default connect(mapStateToProps)(Content);