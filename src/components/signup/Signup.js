import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useHistory } from 'react-router-dom';

import { signupSchema } from './Signup.schema';
import { signUpUser, authorizeUser } from '../../services/authApi';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  button: {
    borderRadius: 25,
    height: 50,
  },
  authErrorMessage: {
    height: 24,
    color: theme.palette.error.main,
    textAlign: 'center',
  },
  errorMessage: {
    height: 24,
    color: theme.palette.error.main,
    paddingLeft: 14,
  },
}));

export default function Signup() {
  const classes = useStyles();

  // const history = useHistory();

  const [authError, setAuthError] = useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSignup = formValues => {
    signUpUser(formValues).then(res => {
      if (res.statusCode === 400) {
        console.log(res);
        setAuthError('Email already in use');
      } else {
        setAuthError('');
        console.log(res);
        // history.push('/landing-page');
        authorizeUser().then(res => console.log(res));
      }
    });
  };

  const isNameError = Boolean(errors.name);
  const isEmailError = Boolean(errors.email);
  const isPasswordError = Boolean(errors.password);

  const showErrorOrEmptyString = (shouldShow, message) => {
    return shouldShow ? message : '';
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleSignup)}>
      <TextField
        autoFocus={true}
        id='name'
        name='name'
        inputRef={register}
        variant='outlined'
        label='Name'
        size='medium'
        color='primary'
        fullWidth={true}
      />
      <Typography className={classes.errorMessage}>
        {showErrorOrEmptyString(isNameError, errors?.name?.message)}
      </Typography>
      <TextField
        id='email'
        name='email'
        inputRef={register}
        variant='outlined'
        label='Email'
        size='medium'
        color='primary'
        fullWidth={true}
        type='email'
      />
      <Typography className={classes.errorMessage}>
        {showErrorOrEmptyString(isEmailError, errors?.email?.message)}
      </Typography>
      <TextField
        id='password'
        name='password'
        inputRef={register}
        variant='outlined'
        label='Password'
        size='medium'
        color='primary'
        fullWidth={true}
        type='password'
      />
      <Typography className={classes.errorMessage}>
        {showErrorOrEmptyString(isPasswordError, errors?.password?.message)}
      </Typography>
      <Button
        className={classes.button}
        color='primary'
        variant='contained'
        fullWidth={true}
        type='submit'
      >
        Submit
      </Button>
      <Typography className={classes.authErrorMessage}>{authError}</Typography>
    </form>
  );
}
