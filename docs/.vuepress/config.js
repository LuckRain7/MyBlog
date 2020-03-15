module.exports = {
  title: "震雨Rain",
  description: "震雨rain的博客",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: '/docs/', // 这是部署到github
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // 多语言设置
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  themeConfig: {
    logo: "/logo.png", //导航栏 logo
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "上次更新", // 文档更新时间：每个文件git最后提交的时间
    nav: require("./thermeConfig/nav.js"), // 导航栏设置
    sidebar: require("./thermeConfig/sidebar.js"), // 侧边栏
    repo: 'LuckRain7/MyBlog',
  }
};
