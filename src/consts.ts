import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Robert Sokola",
  EMAIL: "robertsokola2@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
  YEAR: new Date().getFullYear(), // Automatically set the current year
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Můj osobní web, kde sdílím své myšlenky, projekty a blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Kolekce článků na témata, která mě zajímají.",
};

export const WORK: Metadata = {
  TITLE: "Práce/Work",
  DESCRIPTION: "Kde jsem kdysi pracoval a co dělám teď.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projekty",
  DESCRIPTION: "Kolekce mých projektů, včetně odkazů na repozitáře a dema.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/thexer"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/robert-sokola/",
  }
];
