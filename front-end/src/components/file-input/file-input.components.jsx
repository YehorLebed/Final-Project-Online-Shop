import React from 'react';
import './file-input.styles.css';

const FileInput = ({ limit, files, onFilesChanged }) => {

  function addFiles(newFiles) {
    const newFileList = files.slice();
    for (let file of newFiles)
      newFileList.length < 5 && newFileList.push(file);
    onFilesChanged(newFileList);
  }

  function removeFile(file) {
    onFilesChanged(files.filter(f => f !== file));
  }

  return (
    <div className="file-input-container">
      <div className="file-input-info">
        {
          files.length > 0 ? files.map((file, idx) => (
            <div className="file-input-info-item" key={file.name + idx}>
              <button onClick={() => removeFile(file)}>&#x2715;</button>
              {file.name}
            </div>
          )) : "No File Choosen"
        }
      </div>

      <div className="limit-msg">Choose files, limit: <span>{limit}</span></div>

      <div className="file-input-bottom btn btn-primary">
        <input multiple type="file" className="file-input" id="file-input" onChange={e => addFiles(e.target.files)} />
        <label className="file-input-label" htmlFor="file-input">Choose file</label>
      </div>
    </div>
  );
}

export default FileInput;