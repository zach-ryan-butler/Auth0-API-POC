import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from './Login.schema';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  button: {
    borderRadius: 25,
    height: 50,
  },
  errorMessage: {
    height: 24,
    color: theme.palette.error.main,
    paddingLeft: 14,
  },
}));

export default function Login() {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleLogin = formValues => {
    console.log(formValues);
  };

  const isEmailError = Boolean(errors.email);
  const isPasswordError = Boolean(errors.password);

  const showErrorOrEmptyString = (shouldShow, message) => {
    return shouldShow ? message : '';
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleLogin)}>
      <TextField
        autoFocus={true}
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
    </form>
  );
}
