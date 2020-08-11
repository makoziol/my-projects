import React from 'react';
import AppBar from './AppBar';

function TouristTrophy() {
  return (
    <div
      style={{
        height: '1000px',
        backgroundImage: `url('/images/IMG_20190528_085706.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AppBar></AppBar>
      You are in TT
    </div>
  );
}

export default TouristTrophy;
