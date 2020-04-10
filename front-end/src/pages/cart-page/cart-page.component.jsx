import React from 'react';

import { connect } from 'react-redux';
import { actionAddToCart, actionDeleteFromCart, actionRemoveFromCart } from '../../redux/cart/cart.actions';

import './cart-page.styles.css';

const CartPage = ({ cartData, onIncrease, onDecrease, onDelete }) => {
  const { cartList, total } = cartData;

  let content;

  if (cartList.length === 0)
    content = <h2>Your Cart is Empty</h2>
  else {
    content = (<>
      <table class="table">
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
        {total}грн.
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
  cartData: state.cartData
})

const mapDispatchToProps = {
  onIncrease: actionAddToCart,
  onDecrease: actionRemoveFromCart,
  onDelete: actionDeleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);