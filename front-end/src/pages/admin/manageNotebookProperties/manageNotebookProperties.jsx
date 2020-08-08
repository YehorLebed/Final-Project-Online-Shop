import React from 'react';
import { useHistory } from 'react-router-dom'
import ManageProcessor from './manageProcessor'
import ManageDisplay from './manageDisplay';
import ManageBattery from './manageBattery';
import ManageROM from './manageROM';
import ManageRAM from './manageRAM';

const ManageNotebookProperties = ({ type }) => {
  const history = useHistory();
  if (!['processor', 'display', 'battery', 'ram', 'rom'].includes(type))
    history.push('/admin/notebook-properties');
  switch (type) {
    case 'processor': return <ManageProcessor />
    case 'display': return <ManageDisplay />
    case 'battery': return <ManageBattery />
    case 'ram': return <ManageRAM />
    case 'rom': return <ManageROM />
  }
}

export default ManageNotebookProperties;