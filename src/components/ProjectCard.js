import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import ProgressiveImage from 'react-progressive-image';
import './ProjectCard.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) => ` scale(${s})`;

function ProjectCard({ title, description, image, imageSmall }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Card
        raised
        style={{
          margin: '10px 30px 30px 30px',
          overflow: 'hidden'
        }}
      >
        <ProgressiveImage
          style={{ height: '210px' }}
          delay={3000}
          src={image}
          placeholder={imageSmall}
        >
          {src => (
            <Image style={{ height: '210px' }} src={src} wrapped ui={false} />
          )}
        </ProgressiveImage>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </animated.div>
  );
}

export default ProjectCard;
