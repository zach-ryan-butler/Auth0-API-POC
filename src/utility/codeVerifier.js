const crypto = require('crypto');

export const base64URLEncode = str => {
  return str
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

export const verifier = base64URLEncode(crypto.randomBytes(32));
