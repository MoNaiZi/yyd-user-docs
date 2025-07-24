import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "优易搭操作文档",
  description: "优易搭",
  head: [
    ['link', { rel: 'icon', href: '/logo1.png', type: 'image/png' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/help' }
    ],
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    sidebar: [
      {
        text: '新手入门',
        collapsed: false,
        items: [
          { text: '优易搭能帮我做什么', link: '/docs/base/blurb' },
          { text: '5分钟快速上手', link: '/docs/base/get-started' },

          { text: '遇到问题怎么办', link: '/docs/base/problem' }
        ]
      },
      {
        text: '界面',
        collapsed: false,
        items: [
          { text: '功能概览', link: '/docs/base/overview' },
        ]
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          { text: '快速了解组件', link: '', }
        ]
      },
      {
        text: '组件样式',
        collapsed: false,
        items: []
      },
      {
        text: '逻辑交互',
        collapsed: false,
        items: []
      },
      {
        text: '模板',
        collapsed: false,
        items: []
      },
      {
        text: '打包/导出',
        collapsed: false,
        items: []
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
