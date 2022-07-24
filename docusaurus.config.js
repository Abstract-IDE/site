// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Abstract-IDE',
  tagline: 'make editor more powerful',
  url: 'https://abstract-ide.github.io',
  baseUrl: '/site/', // Base directory of your site relative to your repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Abstract-IDE', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Abstract-IDE/site/tree/main/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Abstract-IDE/site/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Abstract',
        logo: {
          alt: 'Abstract',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Showcase',
            // docId: 'intro',
            to: '/Showcase',
            position: 'left'
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },
          {
            label: 'Projects',
            to: '/projects',
            position: 'right',
          },
          {
            href: 'https://github.com/Abstract-IDE',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/category/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sjnwAZNkC7',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Projects',
                to: '/projects'
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Abstract-IDE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abstract-IDE. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
  }),
  plugins: [

  ]
};

module.exports = config;
