import dotenv from 'dotenv';
import Iron from '@hapi/iron';
import { getTokenCookie } from './cookies';

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const encryptSession = (session) => {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
}

export const getSession = async (req, res = false) => {
  const token = getTokenCookie(req);
  const session = token && Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  
  !session && res && res.status(401).end(`Unauthorized`);

  return session;
}