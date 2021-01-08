// import { React } from './deps.ts'

export default {
  srcDir: 'deno-feedly.js.org',
  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'i18n', 'blog'],
  title: 'Deno Feedly',
  description: 'Designed for collecting and sharing Deno news, articles, etc. (Biweekly).',
  nav: [
    {
      text: 'Docs',
      link: '/issues/introduction.html',
    },
    {
      text: 'Themes',
      link: '/themes/index.html',
    },
    {
      text: 'Plugins',
      link: '/plugins/index.html',
    },
    {
      text: 'Blog',
      link: '/blog/index.html',
    },
    {
      text: 'About',
      link: '/about/index.html',
    },
  ],
  github: 'https://github.com/xcatliu/pagic',
  sidebar: {
    '/issues/': [
      'issues/introduction.md',
      'issues/issue-1.md',
    ],
  },
  ga: {
    id: 'UA-45256157-16',
  },
  blog: {
    root: '/blog/',
  },
  i18n: {
    languages: [
      { code: 'en', name: 'English', root: '/' },
      { code: 'zh-CN', name: '简体中文', root: '/zh-CN/' },
    ],
    overrides: {
      'zh-CN': {
        nav: [
          {
            text: '文档',
            link: '/zh-CN/issues/introduction.html',
          },
          {
            text: '主题',
            link: '/zh-CN/themes/index.html',
          },
          {
            text: '插件',
            link: '/zh-CN/plugins/index.html',
          },
          {
            text: '博客',
            link: '/zh-CN/blog/index.html',
          },
          {
            text: '关于',
            link: '/zh-CN/about/index.html',
          },
        ],
        sidebar: {
          '/zh-CN/docs/': [
            'zh-CN/issues/introduction.md',
            'zh-CN/issues/usage.md',
          ],
        },
        blog: {
          root: '/zh-CN/blog/',
        },
      },
    },
    resources: {
      'zh-CN': {
        translation: {
          'A static site generator powered by Deno + React': 'Deno + React 驱动的静态网站生成器',
        },
      },
    },
  },
}
