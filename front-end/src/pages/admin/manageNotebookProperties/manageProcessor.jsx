import React from 'react';
import { connect } from 'react-redux';
import { actionPromise, actionClear } from '../../../redux/promise/promise.actions';
import ShopServices from '../../../services/shopServices';
import { ManagingTable } from '../../../components';

const ManageProcessor = ({ list, fetchData, onDelete, onUpdate, onAddNew, onUnmount }) =>
  <ManagingTable
    list={list}
    title="processor"
    onUnmount={onUnmount}
    fetchData={fetchData}
    onDeleteItem={onDelete}
    onUpdateItem={onUpdate}
    onAddNewItem={onAddNew}
    keys={{ id: 'number', title: 'text', frequency: 'number', grade: 'number' }}
  />

const mapStateToProps = state => ({
  list: state.responsedData.manageTable && state.responsedData.manageTable.payload
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actionPromise('manageTable', ShopServices.getProcessors())),
  onDelete: id => dispatch(actionPromise('deleteProcessor', ShopServices.deleteProcessorById(id))),
  onAddNew: processor => dispatch(actionPromise('createProcessor', ShopServices.createProcessor(processor))),
  onUpdate: processor => dispatch(actionPromise('updateProcessor', ShopServices.updateProcessor(processor))),
  onUnmount: () => dispatch(actionClear('manageTable'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProcessor);