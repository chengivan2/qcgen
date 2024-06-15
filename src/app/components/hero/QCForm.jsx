"use client";

import { useState } from "react";

const QCFormComponent = ({ onQcURLSubmit }) => {
  const [qcURL, setQcURL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onQcURLSubmit(qcURL);
  };

  return (
    <div className="qc-qr-code-generation">
      <div className="qc-url-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="urlInput"
            id="urlInput"
            className="qc-url-input"
            value={qcURL}
            onChange={(e) => setQcURL(e.target.value)}
            placeholder="Enter URL here"
          />
          <input
            type="submit"
            className="qc-url-submit-button"
            value="Generate QR Code"
          />
        </form>
      </div>
    </div>
  );
};

export default QCFormComponent;
