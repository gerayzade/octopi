import prisma from '~/prisma';

export default async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json(
        await prisma.activity.findMany()
      );
      break;
    case 'POST':
      res.status(200).json(
        await prisma.activity.create({ 
          data: req.body 
        })
      );
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}