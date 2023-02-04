import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Landing',
      links: [
        {
          text: 'Sass',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/landing/mobile-app'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Managed Endpoint', href: '#' },
        { text: 'Managed Network', href: '#' },
        { text: 'Managed M365', href: '#' },
        { text: 'Managed Security', href: '#' },
        { text: 'Business Continuity', href: '#' },
        { text: 'Mobile Device Management', href: '#' },
        { text: 'Patchmanagement', href: '#' },
      ],
    },
    // {
    //   title: 'Technologien',
    //   links: [
    //     { text: 'Windows 10/11', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Support',
      links: [
        { text: 'Help Desk', href: '#' },
        { text: 'Knowledgebase', href: '#' },
        { text: 'Teamviewer', href: '#' },
        { text: 'Managed Backup Portal', href: '#' },
      ],
    },
    {
      title: 'betaITS',
      links: [
        { text: 'Über Uns', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Karriere', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
    { text: 'Datenschutz', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm "></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> betaITS</a> · Alle Rechte vorbehalten. Bilder von <a class="hover:underline" href=https://unsplash.com>Unsplash</a>
  `,
};
