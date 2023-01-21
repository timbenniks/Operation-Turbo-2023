import type { NextApiRequest, NextApiResponse } from 'next'

async function fetchAllStreams(id, count, order) {
  let allData = [];
  let morePagesAvailable = true;
  let pageToken = false;
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&key=${process.env.YOUTUBE_KEY}&eventType=completed&type=video&maxResults=${count || 3}&order=${order || "date"}`

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

  const data = await fetchAllStreams(id, count, order)

  const streams = data.map(video => {
    return {
      date: video.snippet.publishedAt,
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.high.url.replace("hqdefault", "maxresdefault"),
      videoId: video.id.videoId
    }
  })

  res.status(200).json({ meta: { amount: streams.length }, result: streams })
}