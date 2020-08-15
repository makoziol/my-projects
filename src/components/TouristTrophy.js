import React from 'react';
import AppBar from './AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { ISLE_OF_MAN_TRIPS } from '../data';

function TouristTrophy() {
  return (
    <div
      style={{
        height: '2000px',
        backgroundImage: `url('/images/IMG_20190528_085706.jpg')`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
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

export default TouristTrophy;
