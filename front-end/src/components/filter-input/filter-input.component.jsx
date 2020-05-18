import React, { useState } from 'react';
import './filter-input.styles.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionSetFilterByName } from '../../redux/filter/filter.actions';

const FilterInput = ({ onFilterByName, history }) => {
  const [filter, setFilter] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    onFilterByName(filter);
    history.push('/');
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

const mapDispatchToProps = {
  onFilterByName: actionSetFilterByName
};

export default withRouter(connect(null, mapDispatchToProps)(FilterInput));