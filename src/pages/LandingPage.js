import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Container component='section' className={classes.root}>
      <Typography variant='h3' component='h1'>
        You did it!
      </Typography>
    </Container>
  );
}
