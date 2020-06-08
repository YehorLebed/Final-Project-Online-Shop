import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actionPromise } from '../../redux/promise/promise.actions';
import ShopService from '../../services/shop-services';

import './order-page.style.css';

const OrderPage = ({ userData, orders, onLoad }) => {
  console.log(orders);
  useEffect(() => {
    const userId = userData && userData.userInfo && userData.userInfo.sub;
    userId && onLoad(userId);
  }, [])

  let content;

  if (!orders || orders.length === 0)
    content = <h2>You have no Orders</h2>
  else {
    content = (<>
      {
        orders.map(({ goods, ...info }) => <>
          <div className="order-item" key={info.id}>
            <div className="order-info">
              <h3 key={info.id + info.id}>Номер заказа:{info.id}</h3>
              <h3 key={info.id + info.name}>Контактное имя{info.name}</h3>
              <h3 key={info.id + info.phone}>Контактный телефон:{info.phone}</h3>
              <h3 key={info.id + info.email}>Контактный эмейл:{info.email}</h3>
              <h3 key={info.id + info.address}>Контактный адрес:{info.address}</h3>
              <h3 key={info.id + info.total}>Сумма заказа:{info.total}</h3>
            </div>
            <div className="order-goods">
              <table class="cart-table table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    goods.map(({ id, name, price, quantity }) => (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{price}грн.</td>
                        <td>
                          <span className="quantity">{quantity}</span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </>)
      }
    </>);
  }

  return (
    <div className="cart-page">
      {content}
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
  orders: state.responsedData && state.responsedData["orders"] && state.responsedData["orders"].payload
});

const mapDispatchToProps = dispatch => ({
  onLoad: userId => dispatch(actionPromise('orders', ShopService.getOrdersByUserId(userId)))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);