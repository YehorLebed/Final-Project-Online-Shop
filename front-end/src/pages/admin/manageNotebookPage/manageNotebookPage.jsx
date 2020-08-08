import React, { useState, useEffect } from 'react';

import { FileInput, Carousel } from '../../../components';
import { InputField } from '../../../components';

import { useHistory, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  actionUpdateNotebook,
  actionGetDataForNotebookManage,
  actionClearDataForNotebookManage,
  actionDeleteNotebook
} from '../../../redux/admin/admin.actions';


const AdminManageNotebookWrapper = ({ }) => {

}


const AdminManageNotebook = ({ match, onUpdateNotebook, onDeleteNotebook, onMount, onUnmount }) => {
  const notebookId = +match.params.id;

  useEffect(() => {
    onCompenentMount();
    return onComponentUnmount();
  }, []);

  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [notebook, setNotebook] = useState();
  const [properties, setProperties] = useState();

  if (!notebook || !properties) return <h2>Loading...</h2>
  else {
    const { title, price, description, processorId, batteryId, displayId, ramId, romId } = notebook;
    const { processors, batteries, displays, roms, rams } = properties;

    return (
      <div className="add-item-page">


        {/* <Carousel images={files} /> */}
        <FileInput limit={5} files={files} onFilesChanged={files => setFiles(files)} />

        <InputField
          name={'title'}
          value={title}
          label="Product Title:"
          onChange={title => onUpdateNotebookState('title', title)}
        />

        <InputField
          name={'description'}
          value={description}
          label="Product Description:"
          onChange={description => onUpdateNotebookState('description', description)}
        />

        <InputField
          name={'price'}
          value={price}
          label="Product Price:"
          onChange={price => {
            !isNaN(price) && price > 0 && onUpdateNotebookState('price', +price);
          }}
        />

        <InputField
          type="select"
          name="processor"
          label="Processor: "
          value={processorId}
          options={processors.map(({ id, title, frequency }) => ({ value: id, title: `${title} - ${frequency}` }))}
          onChange={id => onUpdateNotebookState('processorId', +id)}
        />

        <InputField
          type="select"
          name="display"
          label="Display: "
          value={displayId}
          options={displays.map(({ id, diagonal, resolution, matrix }) =>
            ({ value: id, title: `${diagonal} - ${resolution} - ${matrix}` }))}
          onChange={id => onUpdateNotebookState('displayId', +id)}
        />

        <InputField
          type="select"
          name="battery"
          label="Battery: "
          value={batteryId}
          options={batteries.map(({ id, capacity, time }) =>
            ({ value: id, title: `${capacity}mAh - ${time}h` }))}
          onChange={id => onUpdateNotebookState('batteryId', +id)}
        />

        <InputField
          type="select"
          name="ram"
          label="RAM: "
          value={ramId}
          options={rams.map(({ id, capacity, type }) =>
            ({ value: id, title: `${capacity}MB - ${type}` }))}
          onChange={id => onUpdateNotebookState('ramId', +id)}
        />

        <InputField
          type="select"
          name="rom"
          label="ROM: "
          value={romId}
          options={roms.map(({ id, capacity, type }) =>
            ({ value: id, title: `${capacity}GB - ${type}` }))}
          onChange={id => onUpdateNotebookState('romId', +id)}
        />

        <button className="btn btn-primary" onClick={onUpdate}>Save</button>
        <button className="btn btn-warning" onClick={onCancel}>Сancel</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div >
    );
  }

  async function onCompenentMount() {
    const data = await onMount(notebookId);
    console.log('onCompenentMount: ', data);

    const { notebook, processors, batteries, displays, roms, rams } = data;
    const dataProperties = { processors, batteries, displays, roms, rams };
    const dataNotebook = {
      id: notebook.id,
      title: notebook.title,
      price: notebook.price,
      description: notebook.description,
      processorId: notebook.processor.id,
      batteryId: notebook.battery.id,
      displayId: notebook.display.id,
      ramId: notebook.ram.id,
      romId: notebook.rom.id
    };

    setProperties(dataProperties);
    setNotebook(dataNotebook);
    setFiles(notebook.images);
  }

  function onComponentUnmount() {
    onUnmount();
  }

  function onUpdateNotebookState(key, value) {
    const newState = { ...notebook };
    newState[key] = value;
    setNotebook(newState);
  }

  function isValidNotebookProperties() {
    const { title, price, description, processorId, batteryId, displayId, ramId, romId } = notebook;
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

  async function onUpdate() {
    if (!isValidNotebookProperties()) return;
    const imagesToUpload = files.filter(file => file.size);
    const notebookToUpload = { ...notebook };
    notebookToUpload.images = files.filter(file => file.filename && file.originalname);
    const data = await onUpdateNotebook(imagesToUpload, notebookToUpload);
    console.log('onUpdateNotebook: ', data);
    data && history.push(`/item/${notebookId}`);
  }

  async function onDelete() {
    const data = await onDeleteNotebook(notebookId);
    console.log('onDelete: ', data);
    data && history.push(`/`);
  }

  function onCancel() {
    history.push('/');
  }
}

const mapDispatchToProps = {
  onUpdateNotebook: actionUpdateNotebook,
  onDeleteNotebook: actionDeleteNotebook,
  onMount: actionGetDataForNotebookManage,
  onUnmount: actionClearDataForNotebookManage
};

export default withRouter(connect(null, mapDispatchToProps)(AdminManageNotebook));