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
    let { items, nextPageToken, error } = await response.json();

    if (error) {
      return { error }
    }

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

  const data: any = await fetchAllVideos(id, count, order)

  let response;

  if (data.error) {
    response = data.error
  }
  else {
    const videos = data?.map(video => {
      return {
        date: video.snippet.publishedAt,
        title: video.snippet.title,
        description: video.snippet.description,
        image: video.snippet.thumbnails.high.url.replace("hqdefault", "maxresdefault"),
        videoId: video.id.videoId
      }
    }).filter(video => video.videoId)

    response = { meta: { amount: videos.length, order }, result: videos }
  }

  res.status(response.code || 200).json(response)
}