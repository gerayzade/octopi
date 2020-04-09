import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllActivitiesByUserId = async (req, res) => {
  // get user's activities
  if(req.method === 'GET') {
    const activities = await prisma.activity.findMany({
      where: { userId: Number(req.query.id) },
    });
    res.json(activities);
  }
  // create new activity
  if(req.method === 'POST') {
    const activity = await prisma.activity.create({ 
      data: {
        ...req.body, 
        user: {
          connect: { id: Number(req.query.id) }
        }
      }
    });
    res.json(activity);
  }
} 

export default getAllActivitiesByUserId;