import React from 'react';
import AppBar from '../components/AppBar';

function Mounteneering() {
  return (
    <div
      style={{
        height: '1000px',
        backgroundImage: `url('/images/IMG_20190912_130844.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AppBar></AppBar>
    </div>
  );
}

export default Mounteneering;
