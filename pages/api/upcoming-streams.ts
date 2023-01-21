import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&key=${process.env.YOUTUBE_KEY}&eventType=upcoming&type=video`)
  const data = await response.json()

  const videos = data.items.map(video => {
    return {
      date: video.snippet.publishedAt,
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.high.url.replace("hqdefault", "maxresdefault"),
      videoId: video.id.videoId
    }
  })

  res.status(200).json({ meta: { amount: videos.length }, result: videos })
}