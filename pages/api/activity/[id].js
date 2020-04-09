import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getActivityById = async (req, res) => {
  // get activity data
  if(req.method === 'GET') {
    const activity = await prisma.activity.findOne({
      where: { id: Number(req.query.id) }
    });
    res.json(activity);
  }
  // update activity data
  if(req.method === 'PUT') {
    const activity = await prisma.activity.update({
      where: { id: Number(req.query.id) },
      data: req.body
    });
    res.json(activity);
  }
} 

export default getActivityById;