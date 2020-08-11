import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';
import { INTERESTS } from '../data';

const AppBar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.setActiveTab);
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
              onClick={() => dispatch(setActiveTab(interest.title))}
            />
          );
        })}
      </Menu>
    </Segment>
  );
};

export default AppBar;
