import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '64px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const interestsList = [
    {
      title: 'Motorcycles',
      description: ' 1/9 scale Motorcycles',
      imagePath: '/images/IMG_20200609_124608243_MP.jpg'
    },
    {
      title: 'Ships',
      description: '1/89 scale Hermione laFayette 1780',
      imagePath: '/images/IMG_20200516_110930235.jpg'
    },
    {
      title: 'Miniatures',
      description: '1/12 scale furniture projects',
      imagePath: '/images/IMG_20200112_191247.jpg'
    },
    {
      title: 'Mountaineering',
      description: 'Annual Trip to Sniezka',
      imagePath: '/images/IMG_20190912_160139.jpg'
    }
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {interestsList.map((interest, key) => (
          <Grid key={key} item xs={12} sm={6} md={6} lg={6}>
            <Link to={`/${interest.title}`}>
              <Card
                project={interest.title}
                description={interest.description}
                imagePath={interest.imagePath}
              ></Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
