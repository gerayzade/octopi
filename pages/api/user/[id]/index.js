import prisma from '~/prisma';

export default async (req, res) => {
  const userId = Number(req.query.id);
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.user.findOne({
          where: { id: userId }
        })
      );
      break;
    case 'PUT':
      res.status(200).json(
        await prisma.user.update({
          where: { id: userId },
          data: req.body
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}