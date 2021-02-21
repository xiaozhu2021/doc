module.exports = {
  title: '小猪的API文档',
  tagline: '在这里你可以找到许多有用的API',
  url: 'https://docusaurus-2-xiaozhu2007.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xiaozhu2021', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '小猪的API文档',
      logo: {
        alt: 'Xiaozhu API Doc Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/xiaozhu2021/doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '欢迎',
              to: 'docs/doc1',
            },
            {
              label: '开始使用',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/xiaozhu2021/doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xiaozhu API Doc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/xiaozhu2021/doc/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/xiaozhu2021/doc/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
