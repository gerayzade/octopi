import crypto from 'crypto';
import prisma from '~/prisma';

export const createUser = async ({ email, name, password }) => {
  // generate a hash with salt
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  // add new user in db
  const data = { email, name, salt, hash };
  const user = await prisma.user.create({ data });
  
  return user;
}

export const findUser = async ({ email, password }) => {
  // check if user exists
  const user = await prisma.user.findOne({ where: { email } });
  if(!user) throw 'There is no account registered with this email';
  // compare hashes
  const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
  if(user.hash !== hash) throw 'Incorrect password provided';
  
  return { 
    id: user.id, 
    email: user.email, 
    name: user.name 
  };
}