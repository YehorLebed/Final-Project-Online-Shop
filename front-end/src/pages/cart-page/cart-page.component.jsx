import React, { useState } from 'react';
import { InputField } from '../../components';
import { connect } from 'react-redux';
import { actionAddToCart, actionDeleteFromCart, actionRemoveFromCart } from '../../redux/cart/cart.actions';
import { actionPromise } from '../../redux/promise/promise.actions';
import ShopService from '../../services/shop-services';

import './cart-page.styles.css';

const CartPage = ({ cartData, userData, onIncrease, onDecrease, onDelete, onCreateOrder }) => {
  const createOrder = async () => {
    const userId = userData && userData.userInfo && userData.userInfo.sub;
    const goods = cartData.cartList.map(({ name, ...goodInf }) => goodInf);
    const order = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      userId: userId || null,
      goods: goods
    };
    onCreateOrder(order);
  }

  const { cartList, total } = cartData;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  let content;

  if (cartList.length === 0)
    content = <h2>Your Cart is Empty</h2>
  else {
    content = (<>
      <table class="cart-table table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            cartList.map(({ id, name, price, quantity }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{price}грн.</td>
                <td>
                  <button className="btn btn-light" onClick={() => onDecrease(id)}>
                    &#8249;
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button className="btn btn-light" onClick={() => onIncrease(id)}>
                    &#8250;
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => onDelete(id)}>
                    &#x2715;
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="total">
        Total:<span className="total-price">{total}грн.</span>
      </div>
      <div className="contacts">
        <form onSubmit={e => { e.preventDefault(); createOrder() }}>
          <InputField name={'name'} label={'name'}
            value={name} onChange={name => setName(name)} />
          <InputField name={'phone'} label={'phone'}
            value={phone} onChange={phone => setPhone(phone)} />
          <InputField name={'email'} label={'email'}
            value={email} onChange={email => setEmail(email)} />
          <InputField name={'address'} label={'address'}
            value={address} onChange={address => setAddress(address)} />

          <button type='submit' className='btn btn-warning'>Create Order</button>
        </form>
      </div>
    </>);
  }

  return (
    <div className="cart-page">
      {content}
    </div>
  );
};

const mapStateToProps = state => ({
  cartData: state.cartData,
  userData: state.userData
});

const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(actionAddToCart(id)),
  onDecrease: id => dispatch(actionRemoveFromCart(id)),
  onDelete: id => dispatch(actionDeleteFromCart(id)),
  onCreateOrder: order => dispatch(actionPromise('order', ShopService.addNewOrder(order)))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);