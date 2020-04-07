import React from 'react';
import Item from '../item/item.component';
import './item-list.styles.css';

const ItemList = ({ items }) => {

  return (
    <ul className="item-list d-flex flex-wrap justify-content-center">
      {items.map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}

export default ItemList;