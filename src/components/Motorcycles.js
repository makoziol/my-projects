import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { MOTORCYCLE_PROJECTS } from '../data';
import { iOS } from '../helpers';

function Motorcycles() {
  return (
    <div
      style={{
        minHeight: `${window.innerHeight}px`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: iOS() ? 'initial' : 'fixed',
        backgroundImage: `url('/images/backgrounds/2medium.jpg')`,
        backgroundColor: '#2a2a2a'
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
          ({ title, description, image, images, imageSmall }, index) => {
            return (
              <Modal
                key={index}
                title={title}
                description={description}
                image={image}
                images={images}
                imageSmall={imageSmall}
              ></Modal>
            );
          }
        )}
      </Grid>
    </div>
  );
}

export default Motorcycles;
