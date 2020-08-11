import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function InterestCard({ project, description, imagePath }) {
  return (
    <Card raised style={{ margin: '10px', borderRadius: '30px' }}>
      <Image src={imagePath} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default InterestCard;
