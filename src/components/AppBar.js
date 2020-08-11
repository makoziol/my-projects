import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { INTERESTS } from '../data';

const AppBar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = name => setActiveItem(name);
  return (
    <Segment inverted>
      <Menu inverted secondary>
        {INTERESTS.map((interest, index) => {
          return (
            <Menu.Item
              key={index}
              as={Link}
              to={`/${interest.title}`}
              name={interest.title}
              active={activeItem === interest.title}
              onClick={() => handleItemClick(interest.title)}
            />
          );
        })}
      </Menu>
    </Segment>
  );
};

export default AppBar;
