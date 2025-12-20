import type { VercelRequest, VercelResponse } from '@vercel/node';
import { addToNotion } from '../src/lib/notion'; // ✅ Adjust path for root-level api folder

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    await addToNotion({ name, email, subject, message });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Notion error:', error);
    return res.status(500).json({ error: 'Failed to save to Notion' });
  }
}
