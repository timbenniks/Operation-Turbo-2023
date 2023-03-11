import * as Contentful from 'contentful';

export type Talk = {
  slug: Contentful.EntryFields.Text,
  conference: Contentful.EntryFields.Text,
  talk: Contentful.EntryFields.Text,
  location: Contentful.EntryFields.Text,
  date: Contentful.EntryFields.Date,
  link: Contentful.EntryFields.Text,
}

export type Image = {
  alt: string;
  url: string;
  ratio: string;
  width: number;
  format: string;
  height: number;
  widths: string;
  caption: string;
  options: string;
  version: number;
  publicId: string;
  createdAt: string;
  previewUrl: string;
  resourceType: string;
  transformation: string;
  globalImageOptions: string;
};