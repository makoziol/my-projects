import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) => ` scale(${s})`;

function InterestCard({ project, description, image }) {
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
          width: '200px',
          height: '250px',
          margin: '30px',
          borderRadius: '30px',
          overflow: 'hidden',
          background: '#d9e6e1'
        }}
      >
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{project}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </animated.div>
  );
}

export default InterestCard;
