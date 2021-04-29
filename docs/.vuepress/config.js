module.exports = {
  base: '/sts/',
  title: '储运开发文档',
  description: '储运前端开发文档',

  port: 8100,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // 最后更新时间
    nav: [// 导航栏
      {
        text: '概述',
        link: '/'
      }, {
        text: 'Vue 学习笔记',
        items:[
          {text:'笔记', link: '/guide/vue/test03'}, // 可不写后缀 .md
          {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
        ]
      }, {
        text: 'Typescript 学习笔记',
        items:[
          {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
          {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
        ]
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南', '深入'),
    }
  },
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        '1',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '2',
      ]
    }
  ]
}
