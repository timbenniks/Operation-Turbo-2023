
export function asDay(date: string) {
  const day = new Date(date).getDate().toString();
  return day.padStart(2, "0");
}

export function asMonth(date: string) {
  return new Date(date).toLocaleString("en-us", { month: "short" }).toString();
}

export function asYear(date: string) {
  return new Date(date).getFullYear().toString();
}

export function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

export function toVideo(video, fromPlaylist) {
  return {
    date: video.snippet.publishedAt,
    title: video.snippet.title,
    description: video.snippet.description,
    image: video.snippet.thumbnails?.high?.url.replace("hqdefault", "maxresdefault"),
    videoId: fromPlaylist ? video.snippet.resourceId.videoId : video.id.videoId ? video.id.videoId : video.id
  }
}

export function toTalk(fields) {
  return {
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
}
