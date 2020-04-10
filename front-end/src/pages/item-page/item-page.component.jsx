import React, { useState } from 'react';
import './item-page.styles.css';

const ItemPage = (props) => {

  

  return (<>
    <h1 className="item-page">Item-page</h1>
    <pre>{props.match.params.id}</pre>
    <div className="item-page">
      <div className="item-specifications"></div>
    </div>
  </>);
};

export default ItemPage;