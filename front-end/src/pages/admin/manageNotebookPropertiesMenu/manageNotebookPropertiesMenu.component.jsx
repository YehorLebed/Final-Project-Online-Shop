import React from 'react';
import { Menu } from '../../../components/';
import { Link } from 'react-router-dom';

const ManageNotebookPropertiesMenu = () =>
  <Menu>
    <Link to="/admin/notebook-properties/processor" className="btn btn-outline-dark">Manage processor</Link>
    <Link to="/admin/notebook-properties/display" className="btn btn-outline-dark">Manage display</Link>
    <Link to="/admin/notebook-properties/battery" className="btn btn-outline-dark">Manage battery</Link>
    <Link to="/admin/notebook-properties/ram" className="btn btn-outline-dark">Manage ram</Link>
    <Link to="/admin/notebook-properties/rom" className="btn btn-outline-dark">Manage rom</Link>
  </Menu>

export default ManageNotebookPropertiesMenu;