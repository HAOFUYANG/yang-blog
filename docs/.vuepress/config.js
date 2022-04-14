module.exports = {
  title: 'Yang Blog',
  description: 'Just Study',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  host: 'localhost', // ip
  port: '8101', //端口号 默认为8080
  base: '/yang-blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端', link: '/webstudy/' },
      {text: '数据结构', link: '/dataStructure/'},
      {text: '面试', link: '/resume/'},
      { text: '博客', link: 'https://www.baidu.com/' },   
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: {
      '/dataStructure/': [
        '/dataStructure/',
        {
            title: '树简介',
            children: [
                '/dataStructure/树简介/简介',
                '/dataStructure/树简介/深度优先遍历',
                '/dataStructure/树简介/广度优先遍历'
            ]
        },
        {
            title: '二叉树',
            children: [
                '/dataStructure/二叉树/前序遍历',
                '/dataStructure/二叉树/中序遍历',
                '/dataStructure/二叉树/后序遍历',
                '/dataStructure/二叉树/二叉树的宽度',
                '/dataStructure/二叉树/重建二叉树'
            ]
        }
    ],
    }
  },
  plugins: ['@vuepress/back-to-top']
};