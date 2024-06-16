"use client"

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import '@/app/componentsstyles/herostyles/qrasync.css'

const QRCodeGenComponent = ({ url }) => {
  const [qrImageUrl, setQrImageUrl] = useState('');
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
          <img className="qc-qrcode-image" src={qrImageUrl} alt="QR Code" />
          <a href={qrImageUrl} download="qrcode.png">
            <button>Download QR Code</button>
          </a>
        </>
      )}
    </div>
  );
};

export default QRCodeGenComponent;
