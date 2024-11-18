export interface Resource {
  subject: string;
  chapter: string;
  type: string;
  title: string;
  channel: string;
  playlistLink: string;
  topics: string;
  category: string;
  views?: string;
}

export interface Chapter {
  number: string;
  title: string;
  description?: string;
  categories: {
    title: string;
    resources: Resource[];
  }[];
}

export interface Subject {
  name: string;
  image: string;
  description?: string;
  chapters: Chapter[];
}