import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PhotoCarousel from '../components/PhotoCarousel';
import ProjectCard from '../components/ProjectCard';

function ModalContentImage({ title, description, image }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div>
          <ProjectCard image={image} title={title} description={description} />
        </div>
      }
    >
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
      <Modal.Content>
        <PhotoCarousel />
      </Modal.Content>
    </Modal>
  );
}

export default ModalContentImage;
