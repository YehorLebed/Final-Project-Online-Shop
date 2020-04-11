import React, { useState } from 'react';
import './file-input.styles.css';

const FileInput = ({ onChangeFile }) => {

  const [file, setFile] = useState('');

  return (
    <div className="input-group mb-3">
      <div className="custom-file">
        <input type="file"
          className="custom-file-input"
          id="inputGroupFile03"
          aria-describedby="inputGroupFileAddon03"
          onChange={(e) => {
            setFile(e.target.files[0]);
            onChangeFile && onChangeFile(e.target.files[0])
          }}
        />
        <label className="custom-file-label" htmlFor="inputGroupFile03">
          {file ? file.name : "Choose file"}
        </label>
      </div>
    </div>
  );
}

export default FileInput;