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
        backgroundColor: `#333333`,
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
            to={location => (location.pathname = `/${interest.title}`)}
            replace
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
      <a
        href="https://martakoziol.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Menu.Item
          style={{
            color: `white`
          }}
          name="About Me"
        ></Menu.Item>
      </a>
    </Menu>
  );
};

export default AppBar;
