
// pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '@/model/User';
import dbConnect from '@/lib/dbConnect';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await new dbConnect();

  if (req.method === 'POST') {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = await User.create({ email, password: hashedPassword, username });

      // Generate a JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

      return res.status(201).json({ user, token });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

