import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserById = async (req, res) => {
  // get user data
  if(req.method === 'GET') {
    const user = await prisma.user.findOne({
      where: { id: Number(req.query.id) }
    });
    res.json(user);
  }
  // update user data
  if(req.method === 'PUT') {
    const user = await prisma.user.update({
      where: { id: Number(req.query.id) },
      data: req.body
    });
    res.json(user);
  }
} 

export default getUserById;