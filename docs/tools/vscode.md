---
sidebar: auto
---

# VS Code 插件推荐

## 1.  前端插件

Auto Close Tag  (自动闭合标签)

Auto Rename Tag (标签自动重命名)

Better Comments (通过使用警告、信息、TODO等注释来改进代码注释 )

Bracket Pair Colorizer (让括号拥有独立的颜色，易于区分 )

Code Runner (代码块运行环境)

Code Spell Checker (英文拼写检查)

CSS Peek (快速查看定位CSS定义 )

Document This (注释模板)

ESLint (ESlint 接管原生 js 提示，可以自定制提示规则。 )

GBKtoUTF8 (编码转换插件)

Git History (git 历史代码对比)

GitLens — Git supercharged (丰富的git日志插件 )

HTML CSS Support (HTML CSS 智能提示)

Live Server (为静态和动态页面启动带有实时重新加载功能的开发本地服务器，非常使用)

Path Intellisense (比较基础的路径补全，path 榜一)

Path Autocomplete (更好的路径补全，支持根路径文件补全)

Polacode (帮你制作好看的代码截图)

Prettier - Code formatter (代码格式化工具)

px to rem (px 转 rem)

Remote - SSH (远程服务器文件辅助插件（linux服务器必备）)

Remote - SSH: Editing Configuration Files (远程服务器文件辅助插件（linux服务器必备）)

Remote - SSH: Explorer (远程服务器文件辅助插件（linux服务器必备）)

Settings Sync (VS Code设置同步，神插件！！！一键从远程同步配置，再也不怕换电脑了！！)

Terminal (右键添加命令行快捷工具)

Vetur (Vue语法提示)

vscode-icons (vscode 资源树目录图标)

koroFileHeader (文件头注释配置及函数注释！！中文文档相当详细 NB plus ！！)

Vue 2 Snippets (Vue代码段提示)

vscode-drawio (画图插件)

Project Manager (项目管理切换插件)

console-helper（日志小助手）

## 2.  主题美化插件

1. Bluloco Dark (非常非常不错的主题)

## 3. 字体推荐

1. 【Monaco】  [https://github.com/todylu/monaco.ttf](https://github.com/todylu/monaco.ttf)

2. 【Fira Code】  [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode )

## 4.  成为开发者

[VSCode插件开发全攻略配套demo](https://github.com/sxei/vscode-plugin-demo)

## 5. 快捷操作

添加代码片段： （⇧⌘P ) -> Surround With Snippet -> ....

## Tips

### 1. 解决 Better Comments在 vue 文件中不生效解決方案

 
```js {22-24} 
// /Users/nowcoder/.vscode/extensions/aaron-bond.better-comments-3.0.2

switch (languageCode) {

    case "apex":
    case "javascript":
    case "javascriptreact":
    case "typescript":
    case "typescriptreact":
        this.highlightJSDoc = true;
        break;
    case "elixir":
    case "python":
    case "tcl":
        this.ignoreFirstLine = true;
        break;
    case "plaintext":
        this.isPlainText = true;
        // If highlight plaintext is enabled, this is a supported language
        this.supportedLanguage = this.contributions.highlightPlainText;
        break;
    case 'vue':
        this.setCommentFormat("//", "/*", "*/");
        break;

}
```
