import React from 'react';
import Search from './Search';

function WelcomeContainer() {
  return (
    <div
      style={{
        height: `${window.innerHeight - 350}px`,
        font: '20px Comic Sans MS',
        fontSize: '20px',
        padding: '70px 0',
        backgroundSize: 'cover',
        color: 'white',
        margin: '0px 0px 0px 0px'
      }}
    >
      <Search />
    </div>
  );
}

export default WelcomeContainer;
