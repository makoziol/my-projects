import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { MOTORCYCLE_PROJECTS } from '../data';

function Motorcycles() {
  return (
    <div
      style={{
        height: '2000px',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `url('/images/IMG_20200619_100128192_MP.jpg')`
        // background: 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)'
        // 'radial-gradient(circle, rgba(207,207,215,1) 0%, rgba(12,191,196,0.46682422969187676) 84%)'
      }}
    >
      <AppBar></AppBar>
      <Grid
        style={{ marginTop: '50px' }}
        columns={2}
        centered
        verticalAlign="middle"
      >
        {MOTORCYCLE_PROJECTS.map(
          ({ title, description, image, images }, index) => {
            return (
              <Modal
                key={index}
                title={title}
                description={description}
                image={image}
                images={images}
              ></Modal>
            );
          }
        )}
      </Grid>
    </div>
  );
}

export default Motorcycles;
