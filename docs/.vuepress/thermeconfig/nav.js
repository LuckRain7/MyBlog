/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-03-15 17:40:55
 */
/*
 * 导航栏设置
 */
module.exports = [
  { text: "个人介绍", link: "/home/" },
  {
    text: "前端",
    items: [
      { text: "HTML", link: "/frontend/HTML/" },
      { text: "CSS", link: "/frontend/CSS/" },
      { text: "JavaScript", link: "/frontend/JavaScript/" },
      { text: "TypeScript", link: "/frontend/TypeScript/" },
      { text: "Vue", link: "/Vue/Vue/" },
      { text: "React", link: "/React/React/" },
      { text: "Webpack", link: "/frontend/Webpack/" },
    ],
  },
  {
    text: "前端工程化",
    link: "/engineering/engineering/",
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
    ],
  },
  {
    text: "个人分享",
    items: [
	  { text: "文章", link: "/article/" },
      { text: "VS Code必备", link: "/share/vscode/" },
      { text: "软件推荐", link: "/share/software/" },
      { text: "网站推荐", link: "/share/website/" },
      { text: "前端工具框架推荐", link: "/frame/index.html" },
      { text: "配置文件", link: "/share/config/" },
      { text: "笔记", link: "/share/notes/" },
    ],
  },
];
