import React from 'react';
import { connect } from 'react-redux';
import { actionPromise, actionClear } from '../../../redux/promise/promise.actions';
import ShopServices from '../../../services/shopServices';
import { ManagingTable } from '../../../components';

const ManageRAM = ({ list, fetchData, onDelete, onUpdate, onAddNew, onUnmount }) =>
  <ManagingTable
    list={list}
    title="ram"
    select={{ type: ['DDR3', 'DDR4', 'DDR5'] }}
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
  fetchData: () => dispatch(actionPromise('manageTable', ShopServices.getRAMs())),
  onDelete: id => dispatch(actionPromise('deleteRAM', ShopServices.deleteRAMById(id))),
  onAddNew: ram => dispatch(actionPromise('createRAM', ShopServices.createRAM(ram))),
  onUpdate: ram => dispatch(actionPromise('updateRAM', ShopServices.updateRAM(ram))),
  onUnmount: () => dispatch(actionClear('manageTable'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageRAM);