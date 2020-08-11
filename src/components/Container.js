import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { Link } from 'react-router-dom';
import { INTERESTS } from '../data';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {INTERESTS.filter(item => item.title !== 'Home').map(
          (interest, key) => (
            <Grid key={key} item xs={12} sm={6} md={6} lg={6}>
              <Link to={`/${interest.title}`}>
                <Card
                  project={interest.title}
                  description={interest.description}
                  imagePath={interest.imagePath}
                ></Card>
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}
