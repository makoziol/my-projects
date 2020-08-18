import React from 'react';
import AppBar from './AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { ISLE_OF_MAN_TRIPS } from '../data';
import { iOS } from '../helpers';

function TouristTrophy() {
  return (
    <div
      style={{
        minHeight: `${window.innerHeight}px`,
        backgroundImage: `url('/images/backgrounds/5medium.jpg')`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: iOS() ? 'initial' : 'fixed',
        backgroundColor: '#81b3e7'
      }}
    >
      <AppBar></AppBar>
      <Grid
        style={{ marginTop: '50px' }}
        columns={2}
        centered
        verticalAlign="middle"
      >
        {ISLE_OF_MAN_TRIPS.map(
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

export default TouristTrophy;
