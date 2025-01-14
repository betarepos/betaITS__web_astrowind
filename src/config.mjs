import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'betaITS',

  origin: 'https://beta-its.de',
  basePathname: '/',
  trailingSlash: false,

  title: 'betaITS — Managed IT Service aus Hannover',
  description:
    'Wir sind der Manged IT Service Provider aus Hannover. Wir betreuen Geräte und Cloud Infrastrukturen mit besten Reaktionszeiten und höchster Kundenzufriedenheit.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'de',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('de', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  // googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  // googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
