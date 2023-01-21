import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const data = await fetch(`https://dev.to/api/articles/${id}`)

  const result = await data.json()

  res.status(200).json({ result })
}
