import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, setSearchedValue } from '../actions';
import { INTERESTS } from '../data';

const AppBar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.setActiveTab);
  return (
    <Menu
      style={{
        backgroundColor: `black`,
        border: 'none',
        boxShadow: 'none',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}
      fixed="top"
      borderless
    >
      {INTERESTS.map((interest, index) => {
        return (
          <Menu.Item
            style={{
              color: `white`
            }}
            key={index}
            as={Link}
            to={`/${interest.title}`}
            name={interest.title}
            active={activeItem === interest.title}
            onClick={() =>
              dispatch(setActiveTab(interest.title)) &&
              dispatch(setSearchedValue('')) &&
              window.scrollTo({ top: 0, left: 0 })
            }
          />
        );
      })}
    </Menu>
  );
};

export default AppBar;
