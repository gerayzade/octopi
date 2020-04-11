import prisma from '~/prisma';

export default async (req, res) => {
  const activityId = Number(req.query.id);
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.activity.findOne({
          where: { id: activityId }
        })
      );
      break;
    case 'PUT':
      res.status(200).json(
        await prisma.activity.update({
          where: { id: activityId },
          data: req.body
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}