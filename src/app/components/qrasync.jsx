import React from "react";
import QRCode from "qrcode";

const QRCodeComponent = async ({ url }) => {
  let qrImageUrl = "";
  try {
    qrImageUrl = await QRCode.toDataURL(url);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="qc-qr-code-generation">
      <div className="qc-url-form-container">
        <form>
          <input type="text" name="urlInput" id="urlInput" className="qc-url-input" />
          <input type="submit" className="qc-url-submit-button" />
        </form>
      </div>
      <div className="qr-code-img-download">
        {qrImageUrl ? (
          <img src={qrImageUrl} alt="QR Code" />
        ) : (
          <p>Generating QR Code...</p>
        )}
        <a href={qrImageUrl} download="qrcode.png">
          <button>Download QR Code</button>
        </a>
      </div>
    </div>
  );
};

export default QRCodeComponent;
