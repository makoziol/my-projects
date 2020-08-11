import React from 'react';
import AppBar from '../components/AppBar';

function Miniatures() {
  return (
    <div
      style={{
        height: '1000px',
        backgroundImage: `url('/images/IMG_20200619_100128192_MP.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AppBar></AppBar>
      You are in miniatures
    </div>
  );
}

export default Miniatures;
