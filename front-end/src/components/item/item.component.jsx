import React from 'react';

import { connect } from 'react-redux';
import { actionAddToCart } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';

import './item.styles.css';

const Item = ({ id, imgSrc, title, text, price, onAddToCart }) => {

  return (
    <div className="item">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="item" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <pre className="card-text">{text}</pre>
          <h4 className="cart-price">${price}</h4>
          <Link to="/cart">
            <button className="btn btn-warning" onClick={() => onAddToCart(id, title, price)}>
              Add to cart
          </button>
          </Link>
          <Link to={`/item/${id}`}>
            <button className="btn btn-primary">More info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onAddToCart: actionAddToCart
}

export default connect(null, mapDispatchToProps)(Item);