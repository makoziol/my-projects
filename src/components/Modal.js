import React, { useState } from 'react';
import { Modal, Checkbox, Icon } from 'semantic-ui-react';
import PhotoCarousel from '../components/PhotoCarousel';
import ProjectCard from '../components/ProjectCard';
import './Modal.css';

function ModalContentImage({ title, description, image, images, imageSmall }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <Modal
      size="tiny"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div>
          <ProjectCard
            image={image}
            title={title}
            description={description}
            imageSmall={imageSmall}
          />
        </div>
      }
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Actions
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          verticleAlign: 'center',
          alignItems: 'center'
        }}
      >
        <Checkbox
          onChange={() => setChecked(!checked)}
          label="Auto Play On/Off"
          toggle
          checked={checked}
        />

        <Icon
          link
          color="green"
          onClick={() => setOpen(false)}
          name="close"
        ></Icon>
      </Modal.Actions>
      <Modal.Content>
        <PhotoCarousel
          key={Math.random()}
          checked={checked}
          images={images}
          title={title}
        />
      </Modal.Content>
    </Modal>
  );
}

export default ModalContentImage;
