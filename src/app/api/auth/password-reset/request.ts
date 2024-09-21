
// pages/api/auth/password-reset/request.ts
import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/model/User';
import dbConnect from '../../../utils/dbConnect';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Generate reset token (JWT or random token)
      const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '15m' });

      // Pseudo-code for sending email:
      // sendEmail(user.email, 'Password Reset', `Here is your password reset link: ${resetToken}`);

      return res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
