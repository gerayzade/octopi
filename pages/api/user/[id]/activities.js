import prisma from '~/prisma';

export default async (req, res) => {
  const userId = Number(req.query.id);
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.user.findOne({ 
          where: { id: userId } 
        }).activities()
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