import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';

function ModalExampleModal({ image }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div style={{ textAlign: 'center' }}>
          <Button inverted>Show Full Size</Button>
        </div>
      }
    >
      <Button
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: '1000',
          backgroundColor: 'black'
        }}
        inverted
        onClick={() => setOpen(false)}
      >
        Close
      </Button>

      <Modal.Content style={{ maxHeight: '600px' }} image scrolling>
        <div style={{ width: '1000px' }}>
          <Image style={{ width: '100%' }} src={image} />
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default ModalExampleModal;
