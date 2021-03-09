import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 180,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 420,
  },
  title: {
    paddingBottom: 50,
    width: 420,
    textAlign: 'center',
  },
});

export default function SplashPage() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Container component='section' className={classes.root}>
      <Typography className={classes.title} variant='h2' component='h1'>
        Auth0-API POC
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          color='primary'
          variant='outlined'
          onClick={() => history.push('login')}
        >
          Login
        </Button>
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          onClick={() => history.push('signup')}
        >
          Signup
        </Button>
      </div>
    </Container>
  );
}
