export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  YEAR?: number; // Optional, used for dynamic year in footer
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export interface TOCProps {
  toc?: TOCItem[]
}

// TOC item interface
export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}
