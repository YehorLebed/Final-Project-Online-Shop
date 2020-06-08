import React, { useState } from 'react';

import { FileInput } from '../../components';
import { InputField } from '../../components';

import { useHistory } from 'react-router-dom';

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { actionAddNewItem } from '../../redux/admin/admin.actions';
import { actionClear } from '../../redux/promise/promise.actions';

import './admin-add-item-page.styles.css'

const AdminAddItemPage = ({ upload, onAddNewItem, onClear }) => {

  const history = useHistory();

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

  if (upload && upload.hasOwnProperty('createGood')) {
    history.push(`/item/${upload.createGood.id}`);
    onClear();
  }

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

const mapDispatchToProps = dispatch => ({
  onAddNewItem: (images, itemInfo) => dispatch(actionAddNewItem(images, itemInfo)),
  onClear: () => dispatch(actionClear('upload'))
});

const mapStateToProps = state => ({
  upload: state.responsedData && state.responsedData['upload'] && state.responsedData['upload'].payload
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemPage);