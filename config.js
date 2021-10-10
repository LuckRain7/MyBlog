/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-03-15 17:40:55
 */

module.exports = {
  title: "震雨 luckrain7's 博客",
  description: "震雨LuckRain7的博客,Webgis,arcgis,openlayer,css,javascript",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  locales: {
    "/": {
      lang: "zh-CN", // 多语言设置
    },
  },
  themeConfig: {
    // logo: "https://rain7.top/luckrain7.png", //导航栏 logo
    sidebarDepth: 1,

    // 导航栏设置
    nav: [
      { text: "个人介绍", link: "/home/" },
      {
        text: "前端",
        items: [
          { text: "HTML", link: "/frontend/HTML.html" },
          { text: "CSS", link: "/frontend/CSS.html" },
          { text: "JavaScript", link: "/frontend/JavaScript.html" },
          { text: "TypeScript", link: "/frontend/TypeScript.html" },
          { text: "Vue", link: "/Vue/Vue.html" },
          { text: "React", link: "/React/React/" },
          { text: "Webpack", link: "/frontend/Webpack/" },
        ],
      },
      {
        text: "前端工程化",
        link: "/engineering/engineering/",
      },
      {
        text: "面试",
        items: [
          { text: "设计模式", link: "/ms/DesignMode.html" },
          { text: "算法", link: "/ms/Algorithm.html" },
          { text: "JavaScript", link: "/ms/JavaScript.html" },
          { text: "CSS", link: "/ms/CSS.html" },
          { text: "前端安全", link: "/ms/safe.html" },
          { text: "Vue", link: "/ms/Vue.html" },
        ],
      },
      {
        text: "服务端",
        items: [
          { text: "Node.js", link: "/server/Node/" },
          { text: "Golang", link: "/server/Golang/" },
          { text: "Python", link: "/server/Python/" },
        ],
      },
      {
        text: "WebGIS",
        items: [
          { text: "README", link: "/WebGIS/index.html" },
          { text: "Cesium", link: "/WebGIS/Cesium/" },
          { text: "ArcGIS", link: "/WebGIS/ArcGIS/" },
          { text: "OpenLayer", link: "/WebGIS/OpenLayer/" },
        ],
      },
      {
        text: "必备工具",
        items: [
          { text: "包管理器", link: "/tools/package/" },
          { text: "Git", link: "/tools/Git/" },
          { text: "GitHub", link: "/tools/GitHub/" },
          { text: "Mac", link: "/tools/Mac/" },
          { text: "VS Code", link: "/tools/vscode/" },
        ],
      },
      {
        text: "个人分享",
        items: [
          { text: "文章", link: "/article/index.html" },
          { text: "开源项目", link: "/share/opensource.html" },
          { text: "软件推荐", link: "/share/software/" },
          { text: "网站推荐", link: "/share/website.html" },
          { text: "前端工具框架推荐", link: "/frame/index.html" },
          { text: "配置文件", link: "/share/config/" },
          // { text: "笔记", link: "/share/notes/" },
        ],
      },
    ],
    // 侧边栏
    displayAllHeaders: false,
    activeHeaderLinks: true,
    // sidebar: require("./thermeConfig/Sidebar.js"),
    repo: "https://github.com/LuckRain7",
    sidebar: {
      "/cache/": ["", "browser-cache", "cdn-cache"], // 缓存相关
    },
  },

  // 插件
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-160724658-1",
      },
    ],
  ],
};
