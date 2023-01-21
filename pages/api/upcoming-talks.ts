import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "contentful";
import type { Talk } from "../../lib/types"
import { toTalk } from "../../lib/helpers"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { count } = req.query
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  });

  var gt = new Date().toISOString();

  const entries = await client.getEntries<Talk>({
    content_type: "talk",
    order: "-fields.date",
    'fields.date[gte]': gt,
    limit: count || 100,
  });

  const result = entries.items.map((item) => (toTalk(item.fields)));
  res.status(200).json({ meta: { amount: result.length }, result })
}