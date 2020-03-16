/**
 * 2020-03-16
 * 获取一个目录下的所有文件名
 */

const { readdir, stat, writeFile } = require("fs");
const path = require("path");
const DOCS_PATH = path.resolve(__dirname, "../../"); //docs目录

// 字典
const DICTIONARY = {
  home: "个人简介",
  share: "个人分享",
  share: "个人分享",
  WebGIS: "WebGIS",
  tool: "前端工具",
  notes: "笔记",
  technology:'技术栈'
};

// 判断是否为文件夹
function isDirectory(path) {
  return new Promise((resolve, reject) => {
    stat(path, (err, stats) => {
      if (err) throw err;
      resolve(stats.isDirectory());
    });
  });
}

// 过滤文件
function banFiles(value) {
  return value !== ".vuepress" && value !== "README.md";
}

// 读取docs下的文件
function func_readdir(path) {
  return new Promise((resolve, reject) => {
    readdir(path, (err, files) => {
      if (err) return err;
      let DOCS_dir = files;
      resolve(DOCS_dir.filter(banFiles));
    });
  });
}

/**
 * @description 对数据进行排序 消除异步读取的顺序问题
 * @author LuckRain7
 * @date 2020-03-16
 * @param {*} catalog
 * @param {*} resolve
 */
function func_sort(catalog, resolve) {
  catalog.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  resolve(catalog);
}

/**
 * @description 对文件夹下读取的文件进行处理，形成目录
 * @author LuckRain7
 * @date 2020-03-16
 * @param {*} catalogItem
 * @returns
 */
function func_format(catalogItem) {
  let newCatalogItem = [];

  catalogItem.forEach(i => {
    if (i === "readme.md") {
      newCatalogItem.push(""); //不读取 readme.md
    } else {
      newCatalogItem.push(i.slice(0, i.indexOf("."))); //去除文件名后缀
    }
  });

  return newCatalogItem;
}

/**
 * @description 生成 sidebar 形式的格式化数据
 * @author LuckRain7
 * @date 2020-03-16
 * @param {*} data 初次格式化数据
 * @returns  sidebar 形式的格式化数据
 */
function format_sidebar(data) {
  let result = {};

  data.forEach(sidebarItem => {
    if (sidebarItem.name != "home") {
      result[`/${sidebarItem.name}/`] = sidebarItem.children;
    }
  });

  return result;
}

func_readdir(DOCS_PATH)
  .then((res, err) => {
    let catalog = []; //格式化数组
    return new Promise((resolve, reject) => {
      res.forEach(async (item, index) => {
        // 拿去文件夹下的文件
        const catalogItem = await func_readdir(path.resolve(DOCS_PATH, item));

        // 格式化
        catalog.push({
          name: item,
          children: func_format(catalogItem, item)
        });

        // 确保全部读取并拼接完成
        if (catalog.length == res.length) {
          func_sort(catalog, resolve);
        }
      });
    });
  })
  .then(res => {
    //生成 sidebar 的格式化数据
    const sidebar = format_sidebar(res); 

    // 输出 autoSidebar 文件
    let TEMPLATE_sidebar = `module.exports = ${JSON.stringify(sidebar)}`;
    writeFile(
      path.resolve(DOCS_PATH, ".vuepress/thermeConfig/autoSidebar.js"),
      TEMPLATE_sidebar,
      function(err) {
        if (err) throw err;
        console.log("autoSidebar文件输出完成");
      }
    );

    // -----------
    let nav = [],
      aa = {};
    res.forEach(item => {
      const files = item;
      if (files.children.length == 1) {
        aa = {
          text: DICTIONARY[files.name],
          link: `/${files.name}/${files.children[0]}`
        };
      } else {
        aa = {
          text: DICTIONARY[files.name],
          items: []
        };
        files.children.forEach(childrenItem => {
          if (childrenItem == "") {
          } else {
            aa.items.push({
              text: childrenItem,
              link: `/${files.name}/${childrenItem}`
            });
          }
        });
      }
      nav.push(aa);
    });
    return nav;
  })
  .then(res => {
    // 生成 nav ---go
    let TEMPLATE_nav = `module.exports = ${JSON.stringify(res)}`;
    writeFile(
      path.resolve(DOCS_PATH, ".vuepress/thermeConfig/autoNav.js"),
      TEMPLATE_nav,
      function(err) {
        if (err) throw err;
        console.log("autoNav文件输出完成");
      }
    );
  });
