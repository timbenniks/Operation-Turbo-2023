import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, per_page } = req.query
  const data = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${per_page || 3}`)

  const result = await data.json()

  const articles = result.map((article) => {
    return {
      identifier: article.url,
      title: article.title,
      description: article.description,
      date: article.published_timestamp,
      image: article.cover_image.split("w_1000/")[1]
    }
  })

  res.status(200).json({ result: articles })
}