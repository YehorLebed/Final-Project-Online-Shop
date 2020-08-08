import React, { useState, useEffect } from 'react';

import { FileInput } from '../../../components';
import { InputField } from '../../../components';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { actionAddNewItem } from '../../../redux/admin/admin.actions';
import ShopService from '../../../services/shopServices';
import { actionClear, actionPromise } from '../../../redux/promise/promise.actions';

import './admin-add-item-page.styles.css'

const AdminAddItemPage = ({ upload, processors, batteries, displays, roms, rams, onLoad, onAddNewItem, onClear }) => {

  useEffect(() => onLoad(), []);

  const history = useHistory();
  const [title, setTitle] = useState('Xiaomi mi notebok Pro');
  const [price, setPrice] = useState(25000);
  const [ramId, setRamId] = useState();
  const [romId, setRomId] = useState();
  const [files, setFiles] = useState([]);
  const [displayId, setDisplayId] = useState();
  const [batteryId, setBatteryId] = useState();
  const [processorId, setProcessorId] = useState();
  const [description, setDescription] = useState('lorem lorem 1-2-3');

  function isValidNotebookProperties() {

    return description.trim().length !== 0 &&
      Number.isInteger(processorId) &&
      Number.isInteger(displayId) &&
      Number.isInteger(batteryId) &&
      Number.isInteger(ramId) &&
      Number.isInteger(romId) &&
      title.trim().length !== 0 &&
      files.length >= 1 &&
      price !== 0;
  }

  function onSave() {
    if (!isValidNotebookProperties()) return;
    const notebookInfo = {
      title: title,
      price: price,
      description: description,
      processorId: processorId,
      batteryId: batteryId,
      displayId: displayId,
      ramId: ramId,
      romId: romId,
    }
    onAddNewItem(files, notebookInfo);
  }

  function clearFields() {
    setDescription();
    setProcessorId();
    setDisplayId();
    setBatteryId();
    setFiles();
    setTitle();
    setPrice();
    setRamId();
    setRomId();
  }

  if (upload && upload.hasOwnProperty('createNotebook')) {
    history.push(`/item/${upload.createNotebook.id}`);
    onClear();
  }

  if (!processors || !batteries || !displays || !roms || !rams)
    return <h2>Loading...</h2>

  return (
    <div className="add-item-page">

      <FileInput limit={5} files={files} onFilesChanged={files => setFiles(files)} />

      <InputField
        name={'title'}
        value={title}
        label="Product Title:"
        onChange={title => setTitle(title)}
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

      <InputField
        type="select"
        name="processor"
        label="Processor: "
        value={processorId}
        options={processors.map(({ id, title, frequency }) => ({ value: id, title: `${title} - ${frequency}` }))}
        onChange={id => setProcessorId(+id)}
      />

      <InputField
        type="select"
        name="display"
        label="Display: "
        value={displayId}
        options={displays.map(({ id, diagonal, resolution, matrix }) =>
          ({ value: id, title: `${diagonal} - ${resolution} - ${matrix}` }))}
        onChange={id => setDisplayId(+id)}
      />

      <InputField
        type="select"
        name="battery"
        label="Battery: "
        value={batteryId}
        options={batteries.map(({ id, capacity, time }) =>
          ({ value: id, title: `${capacity}mAh - ${time}h` }))}
        onChange={id => setBatteryId(+id)}
      />

      <InputField
        type="select"
        name="ram"
        label="RAM: "
        value={ramId}
        options={rams.map(({ id, capacity, type }) =>
          ({ value: id, title: `${capacity}MB - ${type}` }))}
        onChange={id => setRamId(+id)}
      />

      <InputField
        type="select"
        name="rom"
        label="ROM: "
        value={romId}
        options={roms.map(({ id, capacity, type }) =>
          ({ value: id, title: `${capacity}GB - ${type}` }))}
        onChange={id => setRomId(+id)}
      />

      <button className="btn btn-primary" onClick={() => onSave()}>Save</button>
      <button className="btn btn-warning" onClick={clearFields}>Сancel</button>
    </div >
  );
}

const mapDispatchToProps = dispatch => ({
  onAddNewItem: (images, itemInfo) => dispatch(actionAddNewItem(images, itemInfo)),
  onClear: () => dispatch(actionClear('upload')),
  onLoad: () => {
    dispatch(actionPromise('processors', ShopService.getProcessors()))
    dispatch(actionPromise('batteries', ShopService.getBatteries()));
    dispatch(actionPromise('displays', ShopService.getDisplays()));
    dispatch(actionPromise('roms', ShopService.getROMs()));
    dispatch(actionPromise('rams', ShopService.getRAMs()));
  }
});

const mapStateToProps = state => ({
  processors: state.responsedData && state.responsedData['processors'] && state.responsedData['processors'].payload,
  batteries: state.responsedData && state.responsedData['batteries'] && state.responsedData['batteries'].payload,
  displays: state.responsedData && state.responsedData['displays'] && state.responsedData['displays'].payload,
  upload: state.responsedData && state.responsedData['upload'] && state.responsedData['upload'].payload,
  roms: state.responsedData && state.responsedData['roms'] && state.responsedData['roms'].payload,
  rams: state.responsedData && state.responsedData['rams'] && state.responsedData['rams'].payload,
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemPage);