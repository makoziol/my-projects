import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { CRAIG_TARA_TRIPS } from '../data';
import { iOS } from '../helpers';

function CraigTara() {
  return (
    <div
      style={{
        minHeight: `${window.innerHeight}px`,
        overflow: 'hidden',
        backgroundImage: `url('/images/backgrounds/6medium.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: iOS() ? 'initial' : 'fixed',
        backgroundColor: '#c6b294'
      }}
    >
      <AppBar></AppBar>
      <Grid
        style={{ marginTop: '50px' }}
        columns={2}
        centered
        verticalAlign="middle"
      >
        {CRAIG_TARA_TRIPS.map(
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

export default CraigTara;
