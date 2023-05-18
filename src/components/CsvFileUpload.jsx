import React, { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';

const CsvFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <h1>CSV File Upload</h1>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBoxClick}
        style={{
          width: '300px',
          height: '200px',
          border: '1px dashed black',
          margin: '20px 0',
          padding: '20px',
          cursor: 'pointer',
        }}
      > <FiUpload />
        <p>Click or drag and drop a CSV file here</p>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default CsvFileUpload;
