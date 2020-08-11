import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { INTERESTS } from '../data';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';

export default function FullWidthGrid() {
  const dispatch = useDispatch();

  return (
    <Grid container stackable stretched columns={2}>
      {INTERESTS.filter(item => item.title !== 'Home').map((interest, key) => (
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Link
            to={`/${interest.title}`}
            onClick={() => dispatch(setActiveTab(interest.title))}
          >
            <Card
              project={interest.title}
              description={interest.description}
              imagePath={interest.imagePath}
            ></Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  );
}
