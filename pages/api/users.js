import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.user.findMany()
      );
      break;
    case 'POST':
      res.status(200).json(
        await prisma.user.create({ 
          data: req.body 
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 

export default getAllUsers;