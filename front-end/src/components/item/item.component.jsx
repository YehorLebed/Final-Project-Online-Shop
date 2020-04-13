import React from 'react';

import { connect } from 'react-redux';
import { actionAddToCart } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';

import './item.styles.css';

const Item = ({ item, onAddToCart }) => {
  const { id, name, description, price } = item;
  const { filename, originalfilename } = item.images[0];

  return (
    <div className="item">
      <div className="card">
        <img src={`http://localhost:4000/images/${filename}`} className="card-img-top" alt={originalfilename} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-break">{description}</p>
          <h4 className="cart-price">${price}</h4>
          <div className="buttons-container">
            <Link to="/cart">
              <button className="btn btn-warning" onClick={() => onAddToCart(id, name, price)}>Add to cart</button>
            </Link>
            <Link to={`/item/${id}`}>
              <button className="btn btn-primary">More info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onAddToCart: actionAddToCart
}

export default connect(null, mapDispatchToProps)(Item);