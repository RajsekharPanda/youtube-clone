
// pages/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // For JWT, we can't invalidate it on the server side; simply remove it from the client
    return res.status(200).json({ message: 'Logged out successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
