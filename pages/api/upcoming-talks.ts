import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "contentful";
import { isDateBeforeToday, asDay, asMonth, asYear } from "../../lib/helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { count } = req.query
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  });

  var gt = new Date().toISOString();

  const entries = await client.getEntries({
    content_type: "talk",
    order: "-fields.date",
    'fields.date[gte]': gt,
    limit: count || 100,
  });

  const result = entries.items.map((item) => {
    return {
      id: item.fields.slug,
      conference: item.fields.conference,
      talk: item.fields.talk,
      location: item.fields.location,
      date: {
        raw: item.fields.date,
        day: asDay(item.fields.date),
        month: asMonth(item.fields.date),
        year: asYear(item.fields.date),
        upcoming: !isDateBeforeToday(new Date(item.fields.date)),
      },
      link: item.fields.link,
    }
  });

  res.status(200).json({ meta: { amount: result.length }, result })
}