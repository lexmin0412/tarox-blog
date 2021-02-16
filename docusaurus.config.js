module.exports = {
  title: 'Taro X Blog',
  tagline: 'Taro生态集合',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Taro X',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lexmin0412/tarox-website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '精选文章',
          items: [
            {
              label: '样式指引',
              to: 'docs/',
            },
          ],
        },
        {
          title: '官方站点',
          items: [
            {
              label: 'Taro - 官方文档',
              href: 'https://taro-docs.jd.com/taro/docs/README/index.html',
            },
            {
              label: 'Taro UI - 文档',
              href: 'https://taro-ui.jd.com/#/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '我的个人博客',
              href: 'https://lexmin0412.github.io/blog/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Presented by Lexmin, Built with Docusaurus.`,
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
            'https://github.com/lexmin0412/tarox-website/edit/dev/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lexmin0412/tarox-website/edit/dev/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
