import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PhotoCarousel from '../components/PhotoCarousel';
import ProjectCard from '../components/ProjectCard';
import './Modal.css';

function ModalContentImage({ title, description, image, images }) {
  const [open, setOpen] = React.useState(false);
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
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          x
        </Button>
      </Modal.Actions>
      <Modal.Content>
        <PhotoCarousel images={images} title={title} />
      </Modal.Content>
    </Modal>
  );
}

export default ModalContentImage;
