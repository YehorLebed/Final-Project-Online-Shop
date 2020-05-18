import React, { useEffect } from 'react';
import './item-page.styles.css';

import { Link } from 'react-router-dom';
import { actionAddToCart } from '../../redux/cart/cart.actions';
import { Carousel } from '../../components';
import { connect } from 'react-redux';
import ShopServices from '../../services/shop-services';
import { actionPromise } from '../../redux/promise/promise.actions';


const ItemPage = ({ match, good, onPageLoad, onAddToCart }) => {
  useEffect(() => { onPageLoad(parseInt(match.params.id)) }, []);

  if (!good) return "Spinner";

  console.log(good);

  return (
    <div className="item-page">
      <div className="item-page-first-screen">
        <div className="item-page__image">
          <Carousel images={good.images} />
        </div>
        <div className="item-page-main-info">
          <div className="item-page__name">{good.name}</div>
          <div className="item-page-action-element">
            <div className="item-page__price">
              {good.price}
              <span className="item-page__price-currency">грн.</span>
            </div>
            <Link to="/cart">
              <button className="btn btn-success btn-lg"
                onClick={() => onAddToCart(good.id, good.name, good.price)}>
                Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="description-heading">Description</h2>
      <div className="item-page__description">{good.description}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  good: state.responsedData && state.responsedData['currentGood'] && state.responsedData['currentGood'].payload
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: (id) => dispatch(actionPromise('currentGood', ShopServices.getGoodById(id))),
  onAddToCart: (id, name, price) => dispatch(actionAddToCart(id, name, price))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);