import React, { useState } from 'react';

import { FileInput } from '../../components';
import { InputField } from '../../components';

import './admin-add-item-page.styles.css'

const AdminAddItemPage = () => {

  const [image, setImage] = useState('');
  const [goodName, setGoodName] = useState('');
  const [goodDescription, setGoodDescription] = useState('');
  const [goodPrice, setGoodPrice] = useState(0);

  return (
    <div className="add-item-page">

      <FileInput onChangeFile={imgName => setImage(imgName)} />

      <InputField
        name={'name'}
        value={goodName}
        label="Product Name:"
        onChange={name => setGoodName(name)}
      />

      <InputField
        name={'description'}
        value={goodDescription}
        label="Product Description:"
        onChange={descr => setGoodDescription(descr)}
      />

      <InputField
        name={'price'}
        value={goodPrice}
        label="Product Price:"
        onChange={price => {
          price = +price;
          price >= 0 && !isNaN(price) && setGoodPrice(+price)
        }}
      />

      <button className="btn btn-primary">Save</button>
      <button className="btn btn-warning">Сancel</button>
    </div>
  );
}

export default AdminAddItemPage;