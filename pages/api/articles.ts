import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, per_page } = req.query
  const data = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${per_page || 3}`)

  const result = await data.json()

  res.status(200).json({ result })
}