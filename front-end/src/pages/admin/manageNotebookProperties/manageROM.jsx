import React from 'react';
import { connect } from 'react-redux';
import { actionPromise, actionClear } from '../../../redux/promise/promise.actions';
import ShopServices from '../../../services/shopServices';
import { ManagingTable } from '../../../components';

const ManageROM = ({ list, fetchData, onDelete, onUpdate, onAddNew, onUnmount }) =>
  <ManagingTable
    list={list}
    title="rom"
    select={{ type: ['SSD', 'HDD', 'HDD'] }}
    onUnmount={onUnmount}
    fetchData={fetchData}
    onDeleteItem={onDelete}
    onUpdateItem={onUpdate}
    onAddNewItem={onAddNew}
    keys={{ id: 'number', type: 'text', capacity: 'number', grade: 'number' }}
  />

const mapStateToProps = state => ({
  list: state.responsedData.manageTable && state.responsedData.manageTable.payload
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actionPromise('manageTable', ShopServices.getROMs())),
  onDelete: id => dispatch(actionPromise('deleteROM', ShopServices.deleteROMById(id))),
  onAddNew: rom => dispatch(actionPromise('createROM', ShopServices.createROM(rom))),
  onUpdate: rom => dispatch(actionPromise('updateROM', ShopServices.updateROM(rom))),
  onUnmount: () => dispatch(actionClear('manageTable'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageROM);