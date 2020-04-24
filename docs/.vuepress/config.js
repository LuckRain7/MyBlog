/*
 *  Description:  
 *  Author: LuckRain7
 *  Date: 2020-03-15 17:40:55
 */
module.exports = {
  title: "震雨luckrain7's 博客",
  description: "震雨LuckRain7的博客,Webgis,arcgis,openlayer,css,javascript",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  locales: {
    "/": {
      lang: "zh-CN" // 多语言设置
    }
  },
  themeConfig: {
    //导航栏 logo
    // logo: "https://rain7.top/luckrain7.png",
    // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebarDepth: 1,
    // 文档更新时间：每个文件git最后提交的时间
    // lastUpdated: "上次更新",
    // 导航栏设置
    // nav: require("./thermeConfig/autoNav.js"),
    nav: require("./thermeConfig/Nav.js"),
    // 侧边栏
    displayAllHeaders: false,
    activeHeaderLinks: true,
    // sidebar: require("./thermeConfig/autoSidebar.js")
    sidebar: require("./thermeConfig/Sidebar.js")
    // repo: "LuckRain7/MyBlog"
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-160724658-1"
      }
    ]
  ]
};
