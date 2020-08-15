import React from 'react';
import AppBar from '../components/AppBar';

function CraigTara() {
  return (
    <div
      style={{
        height: '1000px',
        backgroundImage: `url('/images/IMG_20190706_195653.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AppBar></AppBar>
    </div>
  );
}

export default CraigTara;
