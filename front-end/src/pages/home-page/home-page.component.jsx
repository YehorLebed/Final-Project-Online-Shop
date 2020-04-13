import React, { useEffect } from 'react';

import { ItemList } from '../../components';
import { connect } from 'react-redux';
import ShopServices from '../../services/shop-services';
import { actionPromise } from '../../redux/promise/promise.actions';


import './home-page.styles.css';

const HomePage = ({ itemList, onLoad }) => {
  useEffect(() => { onLoad() }, []);


  if (!itemList) return "Loading";

  return (<>
    <h1 className="home-page">Home-page</h1>
    <ItemList items={itemList} />
  </>);
};

const mapStateToProps = state => ({
  itemList: state.responsedData && state.responsedData["itemList"] && state.responsedData["itemList"].payload
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actionPromise('itemList', ShopServices.getAllGoods()))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);