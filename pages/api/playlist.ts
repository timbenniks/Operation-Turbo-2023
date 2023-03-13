import type { NextApiRequest, NextApiResponse } from 'next'
import { toVideo } from "../../lib/helpers"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, count } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${process.env.YOUTUBE_KEY}&maxResults=${count || 5}`)

  const result = await data.json()
  let response;

  if (result.error) {
    response = result.error
  }
  else {
    console.log(result.items[0].snippet.resourceId.videoId)
    response = result.items.map(video => (toVideo(video, true))).filter((video) => video.title !== 'Deleted video')
  }

  res.status(response.code || 200).json({ result: response })
}