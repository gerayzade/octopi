import { getSession } from '~/utils/auth/iron';
import { getUserActivities, updateUserActivities } from '~/utils/crud/activities';

export default async (req, res) => {
  const session = await getSession(req);
  
  switch(req.method) {
    case 'GET': {
      const data = await getUserActivities(session);
      res.status(200).json(data);
      break;
    }
    case 'PUT': {
      const data = await updateUserActivities(session, req.body);
      res.status(200).json(data);
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}