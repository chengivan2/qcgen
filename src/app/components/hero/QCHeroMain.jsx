import React, { useState } from 'react';
import QCFormComponent from './QCForm';
import QRCodeGenComponent from './qrasync';
import "../../componentsstyles/herostyles/QCHeroMain.css"

const QCHeroMain = () => {
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleUrlSubmit = (url) => {
    setSubmittedUrl(url);
  };

  return (
    <div className="qc-hero-main-container">
      <QCFormComponent onQcURLSubmit={handleUrlSubmit} />
      {submittedUrl && <QRCodeGenComponent url={submittedUrl} />}
    </div>
  );
};

export default QCHeroMain ;
