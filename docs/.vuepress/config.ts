import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "yangのBlog",
  description: "Just Study",
  themeConfig: {
    enableDarkMode: true,
    repo: " ",
    nav: [
      { text: "前端", link: "/webstudy/" },
      { text: "Javascript", link: "/javascript/" },
      { text: "数据结构", link: "/dataStructure/" },
      // { text: '算法', link: '/algorithm/' },
    ],
    sidebar: {
      "/webstudy/": [
        {
          title: "Javascript",
          children: [
            "/webstudy/Javascript/堆栈模型",
            "/webstudy/Javascript/原型和原型链",
            "/webstudy/Javascript/对象的创建与继承",
            "/webstudy/Javascript/作用域和闭包",
            "/webstudy/Javascript/内存泄漏和垃圾回收",
            "/webstudy/Javascript/同步和异步",
            "/webstudy/Javascript/JS严格模式",
          ],
        },
        {
          title: "ES6及以上",
          children: [
            "/webstudy/ES6及以上/箭头函数",
            "/webstudy/ES6及以上/reduce",
            "/webstudy/ES6及以上/for await of",
          ],
        },
        {
          title: "HTML",
          children: [
            "/webstudy/HTML/node和element",
            "/webstudy/HTML/defer和async",
          ],
        },
        {
          title: "CSS",
          children: [
            "/webstudy/CSS/flex",
            "/webstudy/CSS/文字超出省略",
            "/webstudy/CSS/零碎的知识",
          ],
        },
        {
          title: "Vue",
          children: [
            "/webstudy/Vue/MVVM",
            "/webstudy/Vue/Vue生命周期",
            "/webstudy/Vue/Vue响应式原理",
            "/webstudy/Vue/组件通讯",
            "/webstudy/Vue/computed和watch",
            "/webstudy/Vue/虚拟dom和diff算法",
            "/webstudy/Vue/Vue3",
          ],
        },
        {
          title: "Webpack",
          children: [
            "/webstudy/Webpack/loader和plugin",
            "/webstudy/Webpack/vue.config.js配置案例",
            "/webstudy/Webpack/babel",
          ],
        },
        {
          title: "Vite",
          children: ["/webstudy/Vite/Vite"],
        },
        {
          title: "Experience",
          children: [
            "/webstudy/Experience/首屏优化",
            "/webstudy/Experience/Vue优化",
          ],
        },
        {
          title: "HTTP",
          children: [
            "/webstudy/HTTP/状态码",
            "/webstudy/HTTP/ajax-fetch-axios",
            "/webstudy/HTTP/Http协议1.0,1.1,2.0",
            "/webstudy/HTTP/token和cookie",
            "/webstudy/HTTP/TCP三次握手四次挥手",
            "/webstudy/HTTP/TCP和UDP",
            "/webstudy/HTTP/浏览器的缓存机制",
            "/webstudy/HTTP/网页多标签通讯",
            "/webstudy/HTTP/webSocket",
          ],
        },
        {
          title: "运行环境",
          children: [
            "/webstudy/运行环境/网页的加载和渲染",
            "/webstudy/运行环境/性能优化",
            "/webstudy/运行环境/安全",
          ],
        },
        {
          title: "Nodejs",
          children: [
            "/webstudy/Nodejs/nodejs多进程",
            "/webstudy/Nodejs/中间件",
            "/webstudy/Nodejs/洋葱模型",
          ],
        },
        {
          title: "项目",
          children: ["/webstudy/项目/权限设计"],
        },
        {
          title: "设计模式",
          children: ["/webstudy/设计模式/设计模式"],
        },
      ],
      "/javascript/": [
        "/javascript/深拷贝",
        "/javascript/手写instanceof",
        "/javascript/手写call,bind,apply",
        "/javascript/手写new操作符",
        "/javascript/节流和防抖",
        "/javascript/手写promise",
        "/javascript/单例模式",
        "/javascript/Array去重扁平化",
        "/javascript/柯里化函数",
        "/javascript/手写Ajax",
        "/javascript/add(1)(2)(3)",
        "/javascript/for in和for of",
        "/javascript/for和forEach谁更快",
        "/javascript/手写getType",
      ],
      "/dataStructure/": [
        "/dataStructure/",
        {
          title: "树简介",
          children: ["/dataStructure/树简介/简介"],
        },
        {
          title: "二叉树",
          children: [
            "/dataStructure/二叉树/前序遍历",
            "/dataStructure/二叉树/中序遍历",
            "/dataStructure/二叉树/后序遍历",
            "/dataStructure/二叉树/二叉树的宽度",
            "/dataStructure/二叉树/重建二叉树",
            "/dataStructure/二叉树/最小最大深度",
            "/dataStructure/二叉树/层序遍历",
          ],
        },
      ],
    },
    codeSwitcher: {
      groups: {
        default: { ts: "TypeScript", js: "JavaScript" },
        "plugin-usage": { tuple: "Tuple", object: "Object" },
      },
    },
  },
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "./public/" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  plugins: [],
}));