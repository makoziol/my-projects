import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { MOUNTAIN_TRIPS } from '../data';

function Mounteneering() {
  return (
    <div
      style={{
        height: '2000px',
        backgroundImage: `url('/images/backgrounds/4.jpg')`,
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
        {MOUNTAIN_TRIPS.map(({ title, description, image, images }, index) => {
          return (
            <Modal
              key={index}
              title={title}
              description={description}
              image={image}
              images={images}
            ></Modal>
          );
        })}
      </Grid>
    </div>
  );
}

export default Mounteneering;
