import * as Contentful from 'contentful';

export type Talk = {
  slug: Contentful.EntryFields.Text,
  conference: Contentful.EntryFields.Text,
  talk: Contentful.EntryFields.Text,
  location: Contentful.EntryFields.Text,
  date: Contentful.EntryFields.Date,
  link: Contentful.EntryFields.Text,
}
