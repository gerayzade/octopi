import prisma from '~/prisma';
import { mergeChildProps } from '~/prisma/functions';

export default async (req, res) => {
  const userId = Number(req.query.id);
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        mergeChildProps('activity',
          await prisma.userActivity.findMany({
            where: { userId: userId },
            include: { activity: { select: { title: true } } }
          })
        )
      );
      break;
    case 'PUT':
      res.status(200).json(
        await prisma.user.update({ 
          where: { id: userId },
          data: {
            activities: {
              create: (req.body.created || []).map(({ startTime, endTime, activityId }) => ({
                startTime, endTime, activity: { connect: { id: activityId } }
              })),
              update: (req.body.updated || []).map(({id, startTime, endTime, activityId}) => ({ 
                data: { startTime, endTime, activity: { connect: { id: activityId } } }, 
                where: { id: id } 
              })),
              delete: (req.body.deleted || []).map(id => { id })
            }
          }
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}