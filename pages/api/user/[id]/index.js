import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserById = async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.user.findOne({
          where: { id: Number(req.query.id) }
        })
      );
      break;
    case 'PUT':
      res.status(200).json(
        await prisma.user.update({
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

export default getUserById;