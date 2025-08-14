import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/docs/',
  title: "优易搭操作文档",
  description: "优易搭",
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/docs/logo1.png', type: 'image/png' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: '文档', link: '/help' }
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
          {
            text: '5分钟快速上手', link: '/docs/base/get-started',
            // items: [
            //   { text: '配置说明', link: '/guide/config' },
            //   { text: '主题定制', link: '/guide/theme' }
            // ]
          },
          { text: 'AI 助手', link: '/docs/base/ai-helper' },
          { text: '遇到问题怎么办', link: '/docs/base/problem' }
        ]
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          {
            text: '快速了解组件', link: '/docs/compoents/start',
            // items: [
            //   { text: '组件类型', link: '' },
            //   { text: '自定义组件', link: '/docs/compoents/customize', }
            // ]
          },
          {
            text: '绑定数据', link: '/docs/compoents/bind-data',
            items: [
              { text: '数据', link: '/docs/data/start' },
              // { text: '自定义组件', link: '/docs/compoents/customize', }
            ]
          },
        ]
      },
      {
        text: '模板',
        collapsed: true,
        items: [
          { text: '简介', link: '/docs/template/start', },
          // { text: '模板市场', link: '', },
        ]
      },
      {
        text: '页面',
        collapsed: true,
        items: [
          { text: '快速了解页面', link: '/docs/page/start' },
          { text: '页面管理', link: '/docs/page/manage' },
        ]
      },

      // {
      //   text: '数据中心',
      //   collapsed: false,
      //   items: [
      //     { text: '数据中心是干嘛的？', link: '/docs/data/start', },
      //     { text: '页面数据', link: '', },
      //     { text: '全局数据', link: '', },
      //     // { text: '数据仓库', link: '', },
      //     { text: '缓存数据', link: '', }
      //   ]
      // },
      {
        text: '网络接口',
        collapsed: true,
        items: []
      },

      {
        text: '打包/导出',
        collapsed: false,
        items: [
          { text: '打包应用', link: '/docs/build/pack', },
          { text: '导出源码打包', link: '/docs/build/export-code', }
        ]
      },
      // {
      //   text: '应用文件',
      //   collapsed: false,
      //   items: []
      // }
    ],
    notFound: {
      title: '页面未找到',
      quote: '',
      linkText: '回到主页'
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
