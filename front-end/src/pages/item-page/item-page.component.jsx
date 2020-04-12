import React, { useState, useEffect } from 'react';
import './item-page.styles.css';

import { Carousel } from '../../components';
import { connect } from 'react-redux';
import ShopServices from '../../services/shop-services';
import { actionPromise } from '../../redux/promise/promise.actions';


const ItemPage = ({ match, good, onPageLoad }) => {
  useEffect(() => { onPageLoad(parseInt(match.params.id)) }, []);

  if(!good) return "Spinner";

  return (<>
    <h1 className="item-page">Item-page</h1>
    <pre>{good.name}</pre>
    <div className="item-page">
      <Carousel images={good.images} />
      <div className="item-specifications">
        <div className="description">{good.description}</div>
        <div className="price">{good.price}грн.</div>
      </div>
    </div>
  </>);
};

const mapStateToProps = state => ({
  good: state.responsedData && state.responsedData['currentGood'] && state.responsedData['currentGood'].payload
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: (id) => dispatch(actionPromise('currentGood', ShopServices.getGoodById(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);