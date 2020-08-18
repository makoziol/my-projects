import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { SHIP_PROJECTS } from '../data';
import { iOS } from '../helpers';

function Ships() {
  return (
    <div
      style={{
        minHeight: `${window.innerHeight}px`,
        backgroundImage: `url('/images/backgrounds/3medium.jpg')`,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: iOS() ? 'initial' : 'fixed',
        backgroundColor: '#6f624a'
      }}
    >
      <AppBar></AppBar>
      <Grid
        style={{ marginTop: '50px' }}
        columns={2}
        centered
        verticalAlign="middle"
      >
        {SHIP_PROJECTS.map(
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

export default Ships;
