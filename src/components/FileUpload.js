import React from "react";

const FileUpload = ({ setFile, handleFileUpload }) => {
    return (
        <div className="mb-3">
            <input
                type="file"
                className="form-control mb-2"
                accept=".xlsx"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn btn-success" onClick={handleFileUpload}>Upload Students</button>
        </div>
    );
};

export default FileUpload;
