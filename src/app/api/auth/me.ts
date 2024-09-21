
import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateToken } from '../../../middleware/auth';
import User from '@/model/User';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  authenticateToken(req, res, async () => {
    try {
      const user = await User.findById(req.user.userId).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
}
