import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

const getAllActivitiesByUserId = async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.activity.findMany({
          where: { userId: Number(req.query.id) },
        })
      );
      break;
    case 'POST':
      res.status(200).json(
        await prisma.activity.create({ 
          data: {...req.body, User: { connect: { id: Number(req.query.id) } } }
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 

export default getAllActivitiesByUserId;