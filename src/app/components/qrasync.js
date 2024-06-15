import React from 'react';
import QRCode from 'qrcode';

const QRCodeComponent = async ({ url }) => {
  let qrImageUrl = '';
  try {
    qrImageUrl = await QRCode.toDataURL(url);
  } catch (err) {
    console.error(err);
  }

  return (
    <div>
      {qrImageUrl ? <img src={qrImageUrl} alt="QR Code" /> : <p>Generating QR Code...</p>}
    </div>
  );
};

export default QRCodeComponent;