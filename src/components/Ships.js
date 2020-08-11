import React from 'react';
import AppBar from '../components/AppBar';

function Ships() {
  return (
    <div
      style={{
        height: '1000px',
        backgroundImage: `url('/images/IMG_20200516_110930235.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AppBar></AppBar>
      You are in ships
    </div>
  );
}

export default Ships;
