import type { NextApiRequest, NextApiResponse } from 'next'
import { toVideo } from "../../lib/helpers"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.YOUTUBE_KEY}`)
  const result = await data.json()
  let response;

  if (result.error) {
    response = result.error
  }
  else {
    response = result.items.map(video => (toVideo(video, false)))
  }

  res.status(response.code || 200).json({ result: response })
}