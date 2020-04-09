import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  // get all users
  if(req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.json(users);
  }
  // creare new user
  if (req.method === 'POST') {
    const user = await prisma.user.create({ 
      data: req.body 
    });
    res.json(user);
  }
} 

export default getAllUsers;