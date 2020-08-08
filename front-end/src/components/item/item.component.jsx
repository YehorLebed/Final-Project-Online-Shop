import React from 'react';
import { connect } from 'react-redux';
import { actionAddToCart } from '../../redux/cart/cart.actions';
import { useHistory } from 'react-router-dom';
import { URL } from '../../services/shopServices';

import './item.styles.css';

const Item = ({ isAdmin, item, onAddToCart }) => {

  const history = useHistory();
  const { id, title, price } = item;
  const { filename, originalfilename } = item.images[0];

  return (
    <div className="item">
      <div className="card">
        <img src={`${URL}/images/${filename}`} className="card-img-top" alt={originalfilename} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h4 className="cart-price">${price}</h4>
          <div className="buttons-container">
            {
              isAdmin
                ? <button className="btn btn-warning" onClick={onManageClick}>Manage</button>
                : <button className="btn btn-warning" onClick={onAddToCartClick}>Add to cart</button>
            }
            <button className="btn btn-primary" onClick={onMoreInfoClick}>More info</button>
          </div>
        </div>
      </div>
    </div>
  );

  function onAddToCartClick() {
    onAddToCart(id, title, price);
    history.push('/cart');
  }

  function onMoreInfoClick() {
    history.push(`/item/${id}`);
  }

  function onManageClick() {
    history.push(`/admin/notebook/${id}`)
  }
}

const mapStateToProps = state => ({
  isAdmin: state.userData.userInfo && state.userData.userInfo.role === 'admin'
})
const mapDispatchToProps = {
  onAddToCart: actionAddToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);