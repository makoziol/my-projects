import React from 'react';
import AppBar from '../components/AppBar';
import Modal from '../components/Modal';
import { Grid } from 'semantic-ui-react';
import { CRAIG_TARA_TRIPS } from '../data';

function CraigTara() {
  return (
    <div
      style={{
        height: '1000px',
        overflow: 'hidden',
        backgroundImage: `url('/images/IMG_20190706_195653.jpg')`,
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
        {CRAIG_TARA_TRIPS.map(
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

export default CraigTara;
