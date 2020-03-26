# Echarts

## 一、安装

```bash
yarn add echarts
```

## 二、按需加载

以下例子是结合 webpack进行全局封装

```js
/*
 *  查询网站
 *  https://www.echartsjs.com/zh/cheat-sheet.html
 */

// 加载echarts
import echarts from 'echarts/lib/echarts'

// 再引入你需要使用的图表类型
// import 'echarts/lib/chart/bar' // 饼状图
import 'echarts/lib/chart/line' // 折线图Line

// 组件
import 'echarts/lib/component/legend' // 图例
import 'echarts/lib/component/title' //标题
import 'echarts/lib/component/tooltip' //提示框
import 'echarts/lib/component/markPoint' //标注
import 'echarts/lib/component/markLine' //标线
import 'echarts/lib/component/markArea' //标域
import 'echarts/lib/component/timeline' //时间轴
import 'echarts/lib/component/dataZoom' //数据区域缩放
import 'echarts/lib/component/brush' //刷选
import 'echarts/lib/component/visualMap' //视觉映射
import 'echarts/lib/component/toolbox' //工具栏
import 'echarts/lib/component/graphic' //自定义图形

export default echarts

```

在组件中直接使用

```js
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```



## 三、使用

### 1、基础使用

```js
//引入
const echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
const DOM = document.getElementById('main')
let myChart = echarts.init(DOM)
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

### 2、添加loading动画

```js
 myChart.hideLoading(); 
```

### 3、根据窗口的大小变动图表

```js
//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
}
```

