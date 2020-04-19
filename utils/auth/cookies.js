import dotenv from 'dotenv';
import { serialize, parse } from 'cookie';

dotenv.config();

const TOKEN_NAME = 'token';
const MAX_AGE = 60 * 60 * 8; // 8 hours

export const setTokenCookie = (res, token) => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.TIER_NAME === 'production',
    path: '/',
    sameSite: 'lax',
  });

  res.setHeader('Set-Cookie', cookie);
}

export const removeTokenCookie = (res) => {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

export const parseCookies = (req) => {
  if (req.cookies) return req.cookies;
  const cookie = req.headers?.cookie;
  return parse(cookie || '');
}

export const getTokenCookie = (req) => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}