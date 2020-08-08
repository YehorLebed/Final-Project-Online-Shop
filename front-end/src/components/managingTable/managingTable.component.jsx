import React, { useState, useEffect } from 'react';
import { InputField } from '../'
import './managingTable.css';


const ManagingTable = ({ list, title, keys, select,
  fetchData, onDeleteItem, onUpdateItem, onAddNewItem, onUnmount }) => {

  useEffect(() => {
    fetchData();
    return onUnmount;
  }, []);

  const [newItem, setNewItem] = useState({});
  const [manageItem, setManageItem] = useState({});

  if (!list) return 'Waiting...  :)'

  return (
    <div className="managingTable">
      <h2 className="managingTableTools">
        {
          "Managing " + title + ":"
        }
      </h2>
      <table>
        <thead>
          <tr>
            {
              Object.keys(keys).map(key => <th key={key}>{key}</th>)
            }
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr key={0}>
            {
              Object.keys(keys).map(key =>
                <td key={0 + key}>
                  {
                    select[key]
                      ? <InputField type="select" name={keys[key]}
                        options={select[key].map((name) => ({ value: name, title: name }))}
                        value={newItem[key]} onChange={value => updateNewItem(key, value)} />
                      : (key !== 'id' ? <InputField name={keys[key]} value={newItem[key] || ''}
                        onChange={value => updateNewItem(key, value)} /> : '-')
                  }
                </td>)
            }
            <td key={0 + 'controll'}>
              <button className="btn btn-success icon" onClick={() => onAddNew(newItem)}>Add new</button> {/* add */}
            </td>
          </tr>
          {
            list.map(item => item.id !== manageItem.id ?
              (<tr key={item.id}>
                {getRowTableData(item)}
                <td>
                  <button className="btn btn-primary icon" onClick={() => onCorrect(item)}>&#9998;</button> {/* manage */}
                  <button className="btn btn-danger icon" onClick={() => onDelete(item.id)}>&#10006;</button> {/* delete */}
                </td>
              </tr>) : (<tr key={item.id}>
                {getRowTableDataInputs(item)}
                <td>
                  <button className="btn btn-success icon" onClick={() => onSave(manageItem)}>&#10004;</button> {/* save */}
                  <button className="btn btn-danger icon" onClick={() => onCancel()}>&#10006;</button>  {/* cancel */}
                </td>
              </tr>)
            )
          }
        </tbody>
      </table>
    </div>
  );


  async function onDelete(id) {
    await onDeleteItem(id);
    await fetchData();
  }

  function onCorrect(item) {
    manageItem && onCancel();
    setManageItem(item);
  }

  async function onSave(item) {
    await onUpdateItem(item);
    setManageItem({});
    await fetchData();
  }

  function onCancel() {
    setManageItem({});
  }

  async function onAddNew(item) {
    console.log(item);
    await onAddNewItem(item);
    setNewItem({});
    await fetchData();
  }


  function updateNewItem(key, value) {
    const item = { ...newItem };
    item[key] = isNaN(+value) ? value : +value;
    setNewItem(item);
  }

  function updateItem(key, value) {
    const item = { ...manageItem };
    item[key] = isNaN(+value) ? value : +value;
    setManageItem(item);
  }

  function getRowTableData(item) {
    const tableRow = [];
    for (let key in item)
      tableRow.push(<td key={'' + item.id + item[key]}>{item[key]}</td>);
    return tableRow;
  }

  function getRowTableDataInputs(item) {
    const tableRow = [];
    for (let key in item)
      key === 'id'
        ? tableRow.push(<td key={'' + manageItem.id + manageItem[key]}>{manageItem[key]}</td>)
        : tableRow.push(
          <td key={'' + item.id + item[key]}>
            <InputField
              name={keys[key]}
              label={key} value={manageItem[key]}
              onChange={value => updateItem(key, value)} />
          </td>);
    return tableRow;
  }
};

export default ManagingTable;