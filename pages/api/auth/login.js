import { findUser } from '~/utils/auth/user';
import { encryptSession } from '~/utils/auth/iron';
import { setTokenCookie } from '~/utils/auth/cookies';

export default async (req, res) => {
  try {
    const user = await findUser(req.body);
    const session = {...user};
    const token = await encryptSession(session);
    setTokenCookie(res, token);
    res.status(200).json(session);
  } catch (error) {
    console.error(error);
    res.status(401).send(error);
  }
}