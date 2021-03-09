import { challenge } from '../utility/codeChallenge';

const client_id = process.env.REACT_APP_AUTH_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const audience = process.env.REACT_APP_API_AUDIENCE;
const connection = 'Username-Password-Authentication';
const response_type = 'code';
const redirect_uri = 'http://localhost:3000/callback';

export const signUpUser = ({ name, email, password }) => {
  return fetch(`https://${domain}/dbconnections/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id,
      email,
      password,
      connection,
      name,
    }),
  }).then(res => {
    return res.json();
  });
};

export const authorizeUser = () => {
  return fetch(
    `https://${domain}/authorize?response_type=${response_type}&code_challenge=${challenge}&code_challenge_method=S256&client_id=${client_id}&redirect_uri=${redirect_uri}&audience=${audience}`,
    {
      method: 'GET',
    }
  ).then(res => {
    console.log(res);
    return res.json();
  });
};
