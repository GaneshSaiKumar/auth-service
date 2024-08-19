const crypto = require('crypto');
require('dotenv').config();
const { TokenExpiredError, UnauthorizedError } = require('./errors');

const ALGORITHM = 'HS256';
const SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY_MINUTES = parseInt(process.env.TOKEN_EXPIRY_MINUTES) || 1; 

const encodeBase64 = (str) => Buffer.from(str).toString('base64');
const decodeBase64 = (str) => Buffer.from(str, 'base64').toString('utf8');

const generateToken = (payload) => {
  const header = JSON.stringify({ alg: ALGORITHM, typ: 'JWT' });
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const expirationTime = currentTimestamp + (TOKEN_EXPIRY_MINUTES * 60);

  const payloadWithExpiry = { ...payload, exp: expirationTime };
  const payloadStr = JSON.stringify(payloadWithExpiry);

  const headerBase64 = encodeBase64(header);
  const payloadBase64 = encodeBase64(payloadStr);

  const signature = crypto.createHmac('sha256', SECRET)
    .update(`${headerBase64}.${payloadBase64}`)
    .digest('base64')
    .replace(/\=+$/, '');

  return `${headerBase64}.${payloadBase64}.${signature}`;
};

const verifyToken = (token) => {
  const [headerBase64, payloadBase64, signature] = token.split('.');
  const header = JSON.parse(decodeBase64(headerBase64));
  const payload = JSON.parse(decodeBase64(payloadBase64));

  const validSignature = crypto.createHmac('sha256', SECRET)
    .update(`${headerBase64}.${payloadBase64}`)
    .digest('base64')
    .replace(/\=+$/, '');

  if (validSignature !== signature) {
    throw new UnauthorizedError('Invalid signature');
  }

  // Check for token expiration
  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < currentTimestamp) {
    throw new TokenExpiredError();
  }

  return payload;
};

module.exports = { generateToken, verifyToken };
