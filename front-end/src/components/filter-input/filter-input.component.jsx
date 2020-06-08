import React, { useState } from 'react';
import './filter-input.styles.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionPromise } from '../../redux/promise/promise.actions';
import ShopServices from '../../services/shop-services';

const FilterInput = ({ onFilterByName, history }) => {
  const [filter, setFilter] = useState('');
  console.log(history);

  function onSubmit(e) {
    e.preventDefault();
    // history.location.pathName !== '/' && history.push('/');
    onFilterByName(filter);
  }

  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group mx-sm-2">
        <input type="text" className="form-control" placeholder="Search..."
          value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-light">Search</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onFilterByName: name => dispatch(actionPromise('itemList', ShopServices.getGoodsByName(name)))
});

export default withRouter(connect(null, mapDispatchToProps)(FilterInput));