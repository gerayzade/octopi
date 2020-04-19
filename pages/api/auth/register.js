import { createUser } from '~/utils/auth/user';

export default async (req, res) => {
  try {
    await createUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}