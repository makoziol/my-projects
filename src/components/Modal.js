import React, { useState } from 'react';
import { Button, Modal, Checkbox } from 'semantic-ui-react';
import PhotoCarousel from '../components/PhotoCarousel';
import ProjectCard from '../components/ProjectCard';
import './Modal.css';

function ModalContentImage({ title, description, image, images }) {
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
          <ProjectCard image={image} title={title} description={description} />
        </div>
      }
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Actions
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          verticleAlign: 'center'
        }}
      >
        <Checkbox
          onChange={() => setChecked(!checked)}
          label="Auto Play On/Off"
          toggle
          checked={checked}
        />
        <Button color="green" inverted onClick={() => setOpen(false)}>
          x
        </Button>
      </Modal.Actions>
      <Modal.Content>
        <PhotoCarousel checked={checked} images={images} title={title} />
      </Modal.Content>
    </Modal>
  );
}

export default ModalContentImage;
