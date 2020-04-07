import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './item.styles.css';

const Item = ({ id, imgSrc, title, text, price }) => {



  return (
    <div className="item" style={{ padding: '5px' }}>
      <div className="card" style={{ width: '24rem' }}>
        <img src={imgSrc} className="card-img-top" alt="item" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <pre className="card-text">{text}</pre>
          <h4 className="cart-price">${price}</h4>
          <button href="#" className="btn btn-warning">Add to cart</button>
          <Link to={`/item/${id}`}>
            <button href="#" className="btn btn-primary">More info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;