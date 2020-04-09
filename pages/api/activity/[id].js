import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

const getActivityById = async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.activity.findOne({
          where: { id: Number(req.query.id) }
        })
      );
      break;
    case 'PUT':
      res.status(200).json(
        await prisma.activity.update({
          where: { id: Number(req.query.id) },
          data: req.body
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 

export default getActivityById;