import { getSession } from '~/utils/auth/iron';

export default async (req, res) => {
  const session = await getSession(req);
  const data = { user: session || null };
  res.status(200).json(data);
}