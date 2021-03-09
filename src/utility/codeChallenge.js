import { verifier, base64URLEncode } from './codeVerifier';
const crypto = require('crypto');

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}
export const challenge = base64URLEncode(sha256(verifier));
