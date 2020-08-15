import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { SHIP_PROJECTS } from '../data';

function Ships() {
  return (
    <div
      style={{
        height: '2000px',
        backgroundImage: `url('/images/IMG_20200516_110930235.jpg')`,
        overflow: 'hidden',
        backgroundSize: 'cover',
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
        {SHIP_PROJECTS.map(({ title, description, image, images }, index) => {
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

export default Ships;
