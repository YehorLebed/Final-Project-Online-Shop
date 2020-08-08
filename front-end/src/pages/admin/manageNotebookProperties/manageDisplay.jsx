import React from 'react';
import { connect } from 'react-redux';
import { actionPromise, actionClear } from '../../../redux/promise/promise.actions';
import ShopServices from '../../../services/shopServices';
import { ManagingTable } from '../../../components';

const ManageDisplay = ({ list, fetchData, onDelete, onUpdate, onAddNew, onUnmount }) =>
  <ManagingTable
    list={list}
    title="display"
    onUnmount={onUnmount}
    fetchData={fetchData}
    onDeleteItem={onDelete}
    onUpdateItem={onUpdate}
    onAddNewItem={onAddNew}
    keys={{ id: 'number', matrix: 'text', diagonal: 'number', resolution: 'text', grade: 'number' }}
  />

const mapStateToProps = state => ({
  list: state.responsedData.manageTable && state.responsedData.manageTable.payload
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actionPromise('manageTable', ShopServices.getDisplays())),
  onDelete: id => dispatch(actionPromise('deleteDisplay', ShopServices.deleteDisplayById(id))),
  onAddNew: display => dispatch(actionPromise('createDisplay', ShopServices.createDisplay(display))),
  onUpdate: display => dispatch(actionPromise('updateDisplay', ShopServices.updateDisplay(display))),
  onUnmount: () => dispatch(actionClear('manageTable'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageDisplay);