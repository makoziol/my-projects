import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

const AppBar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = name => setActiveItem(name);
  const TABS = [
    'Home',
    'Mounteneering',
    'Dolls House',
    'Motorcycles',
    'Ships',
    'Isle of Man TT'
  ];
  return (
    <Segment inverted>
      <Menu inverted secondary>
        {TABS.map((tab, index) => {
          return (
            <Menu.Item
              key={index}
              name={tab}
              active={activeItem === tab}
              onClick={() => handleItemClick(tab)}
            />
          );
        })}
      </Menu>
    </Segment>
  );
};

export default AppBar;
