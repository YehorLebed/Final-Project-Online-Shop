import React, { useState } from 'react';

import { FileInput } from '../../components';
import { InputField } from '../../components';

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { actionAddNewItem } from '../../redux/admin/admin.actions';

import './admin-add-item-page.styles.css'

const AdminAddItemPage = ({ upload, history, onAddNewItem }) => {


  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  function onSave() {
    if (files.length >= 1 &&
      name.trim().length !== 0 &&
      description.trim().length !== 0 &&
      price !== 0) {
      onAddNewItem(files, { name, description, price });
    }
  }

  function clearFields() {

  }

  if (upload && upload.hasOwnProperty('createGood'))
    return <Redirect to={`/item/${upload.createGood.id}`} />;

  return (
    <div className="add-item-page">

      <FileInput limit={5} files={files} onFilesChanged={files => setFiles(files)} />

      <InputField
        name={'name'}
        value={name}
        label="Product Name:"
        onChange={name => setName(name)}
      />

      <InputField
        name={'description'}
        value={description}
        label="Product Description:"
        onChange={description => setDescription(description)}
      />

      <InputField
        name={'price'}
        value={price}
        label="Product Price:"
        onChange={price => {
          price = +price;
          price >= 0 && !isNaN(price) && setPrice(+price);
        }}
      />

      <button className="btn btn-primary"
        onClick={() => {
          onSave();

        }}>
        Save
      </button>
      <button className="btn btn-warning" onClick={clearFields}>Сancel</button>
    </div>
  );
}

const mapStateToProps = state => ({
  upload: state.responsedData && state.responsedData['upload'] && state.responsedData['upload'].payload
})

export default connect(mapStateToProps, { onAddNewItem: actionAddNewItem })(AdminAddItemPage);