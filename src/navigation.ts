import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: '/#/features'
    },
    {
      text: 'Funding',
      href: '/#/funding'
    },
    {
      text: 'News',
      href: '/news'
    },
    {
      text: 'Learn',
      links: [
        {
          text: 'Quickstart: installation',
          href: 'https://library.qiime2.org/quickstart',
          external: true
        },
        {
          text: 'The Stacks: documentation',
          href: 'https://library.qiime2.org/docs',
          external: true
        },
        {
          text: 'Using QIIME 2',
          href: 'https://use.qiime2.org',
          external: true
        },
        {
          text: 'Developing with QIIME 2',
          href: 'https://develop.qiime2.org',
          external: true
        }
      ]
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Getting Involved',
          href: 'https://use.qiime2.org/en/latest/how-to-guides/get-involved.html',
          external: true,
        },
        {
          text: 'Forum',
          href: 'https://forum.qiime2.org',
          external: true,
        },
        {
          text: 'Library',
          href: 'https://library.qiime2.org',
          external: true,
        },
        {
          text: 'Code of Conduct',
          href: 'https://github.com/qiime2/.github/blob/main/CODE-OF-CONDUCT.md',
          external: true,
        },
      ]
    }
  ],
  actions: [
    { text: 'Quickstart', variant: 'primary',  href: 'https://library.qiime2.org/quickstart', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'QIIME 2',
      links: [
        { text: 'Library', href: 'https://library.qiime2.org' },
        { text: 'View', href: 'https://view.qiime2.org' },
        { text: 'Forum', href: 'https://forum.qiime2.org' },
        { text: 'Citing', href: 'https://doi.org/10.1038/s41587-019-0209-9' },
      ],
    },
    {
      title: 'Library',
      links: [
        { text: 'Installation', href: 'https://library.qiime2.org/quickstart' },
        { text: 'Documentation', href: 'https://library.qiime2.org/docs' },
        { text: 'Videos', href: 'https://library.qiime2.org/videos' },
        { text: 'Data Resources', href: 'https://library.qiime2.org/data-resources' },
        { text: 'Available Plugins', href: 'https://library.qiime2.org/plugins' },
        { text: 'Old User Docs', href: 'https://docs.qiime2.org/2024.10/' },
      ],
    },
    {
      title: 'Forum',
      links: [
        { text: 'Announcements', href: 'https://forum.qiime2.org/c/announcements/8' },
        { text: 'User Support', href: 'https://forum.qiime2.org/c/user-support/6' },
        { text: 'Library Plugin Support', href: 'https://forum.qiime2.org/c/community-plugin-support/24' },
        { text: 'General Discussion', href: 'https://forum.qiime2.org/c/general-discussion/23' },
        { text: 'Developer Discussion', href: 'https://forum.qiime2.org/c/dev-discussion/7' },
        { text: 'Community Contributions', href: 'https://forum.qiime2.org/c/community-contributions/15' },
      ],
    },
    {
      title: 'For Developers',
      links: [
        { text: 'Developing with QIIME 2', href: 'https://develop.qiime2.org/en/latest/' },
        { text: 'Plugin Development Tutorial', href: 'https://develop.qiime2.org/en/latest/plugins/tutorials/intro.html' },
        { text: 'Plugin API', href: 'https://develop.qiime2.org/en/latest/plugins/references/api/intro.html' },
        { text: 'Python SDK', href: 'https://develop.qiime2.org/en/latest/interfaces/references/api.html' },
        { text: 'QZA Internals', href: 'https://develop.qiime2.org/en/latest/framework/explanations/archives.html' },
        { text: 'QIIME 2 GitHub', href: 'https://github.com/qiime2' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Software License', href: 'https://github.com/qiime2/qiime2/blob/dev/LICENSE' },
    { text: 'Contributing', href: 'https://github.com/qiime2/.github/blob/main/CONTRIBUTING.md' },
    { text: 'Code of Conduct', href: 'https://github.com/qiime2/.github/blob/main/CODE-OF-CONDUCT.md' },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/qiime2' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/qiime2.org' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Original <a class='underline' href="https://github.com/onwidget/astrowind">template</a> by <a class="underline" href="https://onwidget.com/" target="_blank" rel="noopener noreferrer"> onWidget</a>. · Site maintained by the <a class="underline" href="https://cap-lab.bio/" target="_blank" rel="noopener noreferrer">Caporaso Lab</a>. · All rights reserved.
  `,
};
