import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "contentful";
import { isDateBeforeToday, asDay, asMonth, asYear } from "../../lib/helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  });

  const entry = await client.getEntries({
    content_type: "talk",
    "fields.slug[match]": id,
  });

  const { fields } = entry.items[0]

  const result = {
    id: fields.slug,
    conference: fields.conference,
    talk: fields.talk,
    location: fields.location,
    date: {
      raw: fields.date,
      day: asDay(fields.date),
      month: asMonth(fields.date),
      year: asYear(fields.date),
      upcoming: !isDateBeforeToday(new Date(fields.date)),
    },
    link: fields.link,
  }


  res.status(200).json({ meta: { amount: 0 }, result })
}