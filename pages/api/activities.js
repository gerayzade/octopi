import { getSession } from '~/utils/auth/iron';
import { getAllActivities } from '~/utils/crud/activities';

export default async (req, res) => {
  const session = await getSession(req, res);
  if(!session) return;

  switch(req.method) {
    case 'GET': {
      const data = await getAllActivities();
      res.status(200).json(data);
      break;
    }
    default: {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}