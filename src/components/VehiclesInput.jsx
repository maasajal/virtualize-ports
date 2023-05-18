import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

const TopSection = ({
  data,
  file,
  error,
  settingFile,
  handleFileChange,
  handleParse,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };
  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  console.log("dddddddddddddd", data);
  return (
    <section className="uploadFileArea container mx-auto px-4 md:container md:mx-auto">
      <div className="container">
        <h1>Vehicles Data Input</h1>
        <p>Input your passenger details as csv, excel or other format.</p>
        {error && (
          <div>
            <span>Info</span>
            <div> {error} </div>
          </div>
        )}
        <div>
          <div
            onDrop={handleDrop}
            onDragOver={handleDrop}
            onClick={handleBoxClick}
            style={{
              width: "300px",
              height: "200px",
              border: "1px dashed black",
              margin: "20px 0",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            {" "}
            <FiUpload />
            <p>Click to Upload a file or drag and drop a CSV file here</p>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </div>
          <input
            type="file"
            id="csvInput"
            name="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button onClick={handleParse}>Upload and Read</button> <br />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
