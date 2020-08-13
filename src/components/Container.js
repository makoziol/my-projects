import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { INTERESTS } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';

export default function FullWidthGrid() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.setSearchedValue);

  return (
    <div style={{ display: 'flex', width: '100%', overflow: 'auto' }}>
      {INTERESTS.filter(item => {
        if (!value) {
          return item.title !== 'Home';
        } else return null;
      }).map((interest, index) => (
        <Link
          key={index}
          to={`/${interest.title}`}
          onClick={() => dispatch(setActiveTab(interest.title))}
        >
          <Card
            project={interest.title}
            description={interest.description}
            image={interest.image}
          ></Card>
        </Link>
      ))}
    </div>
  );
}
