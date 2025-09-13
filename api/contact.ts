
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Log raw body type and content for debug
  console.log("API /contact - Raw req.body type:", typeof req.body);
  console.log("API /contact - Raw req.body content:", req.body);

  const { name, email, subject, message } = req.body || {};

  // Basic validation
  if (!name || !email || !subject || !message) {
    console.error("API /contact - Missing required fields:", req.body);
    return res.status(400).json({ error: "Missing required fields: name, email, subject, and message are required" });
  }

  try {
    // Use addToNotion helper for consistency and avoiding duplication
    await addToNotion({ name, email, company: subject, message });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("API /contact - Notion API Error:", error.body || error.message || error);
    return res.status(500).json({ error: "Failed to add to Notion", details: error.body || error.message });
  }
}

