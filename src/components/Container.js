import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { INTERESTS } from '../data';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';

export default function FullWidthGrid() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', width: '100%', overflow: 'auto' }}>
      {INTERESTS.filter(item => item.title !== 'Home').map(
        (interest, index) => (
          <Link
            key={index}
            to={`/${interest.title}`}
            onClick={() => dispatch(setActiveTab(interest.title))}
          >
            <Card
              project={interest.title}
              description={interest.description}
              imagePath={interest.imagePath}
            ></Card>
          </Link>
        )
      )}
    </div>
  );
}
