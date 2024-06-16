"use client";

import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import QRCode from "qrcode";
import "@/app/componentsstyles/herostyles/qrasync.css";

const QRCodeGenComponent = ({ url }) => {
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const generateQR = async () => {
      if (url) {
        setIsLoading(true);
        try {
          const imageUrl = await QRCode.toDataURL(url);
          setQrImageUrl(imageUrl);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    generateQR();
  }, [url]);

  if (isLoading) {
    return <p>Generating QR Code...</p>;
  }

  return (
    <div className="qc-qrcodegencomponent">
      {qrImageUrl && (
        <>
        <h5 className="qc-scan-me-title">SCAN ME</h5>
          <img className="qc-qrcode-image" src={qrImageUrl} alt="QR Code" />
          <a href={qrImageUrl} className="qc-qrcode-download-button" download="qrcode.png">
            <FaDownload />
            Download QR Code
          </a>
        </>
      )}
    </div>
  );
};

export default QRCodeGenComponent;
