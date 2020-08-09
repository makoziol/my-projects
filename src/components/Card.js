import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 500,
    margin: 'auto',
    transition: '0.5s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
  },
  media: {
    paddingTop: '56.25%'
  },
  content: {
    textAlign: 'left',
    padding: muiBaseTheme.spacing(3)
  },
  divider: {
    margin: `${muiBaseTheme.spacing(3)}px 0`
  },
  heading: {
    fontWeight: 'bold'
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -muiBaseTheme.spacing
    }
  }
});

function OutlinedCard({ classes, project, description, imagePath }) {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imagePath} />
      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          {project}
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const WrappedApp = withStyles(styles)(OutlinedCard);

export default WrappedApp;
