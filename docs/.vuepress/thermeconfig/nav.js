/*
 * 导航栏设置
 */
module.exports = [
  { text: "个人介绍", link: "/home/" },
  { text: "个人分享", link: "/share/" },
  {
    text: "WebGIS",
    items: [
      { text: "Cesium", link: "/WebGIS/Cesium/" },
      { text: "ArcGIS", link: "/WebGIS/ArcGIS/" },
      { text: "OpenLayer", link: "/WebGIS/OpenLayer/" }
    ]
  },
  { text: "笔记", link: "/notes/" }
];
