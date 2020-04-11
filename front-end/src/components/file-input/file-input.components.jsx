import React, { useState } from 'react';
import './file-input.styles.css';

const FileInput = ({ onChangeFile }) => {

  const [files, setFiles] = useState([]);

  function addFiles(newFiles) {
    const newFileList = files.slice();
    for (let file of newFiles)
      newFileList.push(file);
    setFiles(newFileList);
  }

  function removeFile(fileName) {
    setFiles(files.filter(f => f.name !== fileName));
  }

  return (
    <div className="file-input-container">
      <div className="file-input-info">
        {
          files.length > 0 ? files.map(({ name }) => (
            <div key={name}>
              <button onClick={() => removeFile(name)}>x</button>
              {name}
            </div>
          )) : "No File Choosen"
        }
      </div>

      <div className="file-input-bottom btn btn-primary">
        <input multiple type="file" className="file-input" id="file-input" onChange={e => addFiles(e.target.files)} />
        <label className="file-input-label" htmlFor="file-input">Choose file</label>
      </div>
    </div>
  );
}

export default FileInput;

/* {
          files.length > 0 ? files.map(({ name }) => (
            <div key={name}>
              {name}
              <button onClick={() => removeFile(name)}>x</button>
            </div>
          )) : "Choose files"
        }
         */