import React from 'react';
import { connect } from 'react-redux';
import { actionPromise, actionClear } from '../../../redux/promise/promise.actions';
import ShopServices from '../../../services/shopServices';
import { ManagingTable } from '../../../components';

const ManageBattery = ({ list, fetchData, onDelete, onUpdate, onAddNew, onUnmount }) =>
  <ManagingTable
    list={list}
    title="battery"
    onUnmount={onUnmount}
    fetchData={fetchData}
    onDeleteItem={onDelete}
    onUpdateItem={onUpdate}
    onAddNewItem={onAddNew}
    keys={{ id: 'number', time: 'number', capacity: 'number', grade: 'number' }}
  />

const mapStateToProps = state => ({
  list: state.responsedData.manageTable && state.responsedData.manageTable.payload
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actionPromise('manageTable', ShopServices.getBatteries())),
  onDelete: id => dispatch(actionPromise('deleteBattery', ShopServices.deleteBatteryById(id))),
  onAddNew: battery => dispatch(actionPromise('createBattery', ShopServices.createBattery(battery))),
  onUpdate: battery => dispatch(actionPromise('updateBattery', ShopServices.updateBattery(battery))),
  onUnmount: () => dispatch(actionClear('manageTable'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageBattery);