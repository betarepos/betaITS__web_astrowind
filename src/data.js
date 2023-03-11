import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Managed Endpoint',
          href: getPermalink('/services/managed-endpoint'),
        },
        {
          text: 'Managed Network',
          href: getPermalink('/services/managed-network'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  // actions: [
  //   { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  // ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Managed Endpoint', href: '/services/managed-endpoint' },
        { text: 'Managed Network', href: '/services/managed-network' },
        // { text: 'Managed M365', href: '#' },
        // { text: 'Managed Security', href: '#' },
        // { text: 'Business Continuity', href: '#' },
        // { text: 'Mobile Device Management', href: '#' },
        // { text: 'Patchmanagement', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Desk', href: 'https://helpdesk.beta-its.de' },
        { text: 'Knowledgebase', href: 'https://helpdesk.beta-its.de' },
        { text: 'TeamviewerQS Download', href: 'https://download.teamviewer.com/download/TeamViewerQS.exe' },
        { text: 'Managed Backup Portal', href: 'https://m365.backups-beta-its.de' },
      ],
    },
    // {
    //   title: 'betaITS',
    //   links: [
    //     { text: 'Über Uns', href: '/about' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Karriere', href: '#' },
    //     // { text: 'Press', href: '#' },
    //     // { text: 'Inclusion', href: '#' },
    //     // { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
    { text: 'Datenschutz', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/betaITSgmbh' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/betaits-gmbh/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm "></span>
    Made with ♥ by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> betaITS</a> · Alle Rechte vorbehalten. Bilder von <a class="hover:underline" href=https://unsplash.com>Unsplash</a>
  `,
};
