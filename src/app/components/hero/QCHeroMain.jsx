import React, { useState } from 'react';
import QCFormComponent from './QCForm';
import QRCodeGenComponent from './qrasync';

const QCHeroMain = () => {
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleUrlSubmit = (url) => {
    setSubmittedUrl(url);
  };

  return (
    <div>
      <QCFormComponent onQcURLSubmit={handleUrlSubmit} />
      {submittedUrl && <QRCodeGenComponent url={submittedUrl} />}
    </div>
  );
};

export default QCHeroMain ;
