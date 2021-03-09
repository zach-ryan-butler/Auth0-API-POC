import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Signup from '../components/signup/Signup';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: 400,
    padding: 15,
    marginTop: 50,
  },
  title: {
    marginTop: 50,
  },
});

export default function SignupPage() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant='h2' component='h2'>
        Sign up
      </Typography>
      <Paper className={classes.paper}>
        <Signup />
      </Paper>
    </Container>
  );
}
