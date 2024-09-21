
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/model/User';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { token, newPassword } = req.body;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await User.findByIdAndUpdate(decoded.userId, { password: hashedPassword });

      return res.status(200).json({ message: 'Password has been reset' });
    } catch (error) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
