import type { NextApiRequest, NextApiResponse } from 'next'

async function fetchAllVideos(id, count, order) {
  let allData = [];
  let morePagesAvailable = true;
  let pageToken = false;
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=${id}&key=${process.env.YOUTUBE_KEY}&order=${order || "date"}&maxResults=${count || 3}`

  while (morePagesAvailable) {
    if (pageToken) {
      url = `${url}&pageToken=${pageToken}`
    }

    const response = await fetch(url)
    let { items, nextPageToken } = await response.json();
    items.forEach(item => allData.push(item));

    morePagesAvailable = nextPageToken ? true : false;

    if (count < allData.length + 1) {
      morePagesAvailable = false;
    }

    pageToken = nextPageToken;
  }

  return allData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, count, order } = req.query

  const data = await fetchAllVideos(id, count, order)

  const videos = data.map(video => {
    return {
      date: video.snippet.publishedAt,
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.high.url.replace("hqdefault", "maxresdefault"),
      videoId: video.id.videoId
    }
  }).filter(video => video.videoId)

  res.status(200).json({ meta: { amount: videos.length, order }, result: videos })
}