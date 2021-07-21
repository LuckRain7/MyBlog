---
sidebar: auto
---

# WebGIS

::: tip 目录：
[[toc]]
:::

## 1.  方案

### 1.1  地图数据处理/生产

> 采集、加工、处理地理信息数据（矢量图、影像图、专题图）

[ArcGIS Desktop](https://desktop.arcgis.com/zh-cn/arcmap/) （行业老大，不开源，贼贵）

[Mapinfo professional](https://www.precisely.com/product/precisely-mapinfo/mapinfo-pro) （不开源）

[MapGIS](https://www.mapgis.com/) （不开源，中国制造）

[uDig](http://udig.refractions.net/)

[QGIS](https://www.qgis.org/)

[GRASS](https://grass.osgeo.org/) （美国军方建筑工程研究实验室研发，有 Mac 版本）

[OpenEV](http://openev.sourceforge.net/)

[gvSIG](http://www.gvsig.com/)

[OpenJUMP](http://www.openjump.org/)

[OSSIM](http://trac.osgeo.org/ossim/) （遥感图像处理）

[InterImage](http://www.lvc.ele.puc-rio.br/projects/interimage/)（专注影像解译）

[PolSARPro](https://earth.esa.int/web/polsarpro)（极化雷达处理）

[E-foto](http://www.efoto.eng.uerj.br/en) （航空摄影测量）

### 1.2  地理信息数据存储

关系型数据使用：基于 PostgreSQL 数据库的 PostGIS、基于 Mysql 数据库的 MySQL Spatial、带有地理目标扩展的 Ingres 数据库

非关系型数据使用 mongodb、HBase 数据库（存储瓦片、图像）

[PostGIS](http://postgis.net/)

[PostgreSQL](https://www.postgresql.org/)

[MySQL](https://www.mysql.com)

[mongodb](https://www.mongodb.com/)

[HBase](https://hbase.apache.org/)

[rasdaman](http://www.rasdaman.org/) （栅格数据库）

[SpatiaLite](http://www.gaia-gis.it/gaia-sins/) (轻量级数据库SQLite空间扩展)

### 1.3  GIS 服务器

使用GeoServer、MapServer生产地图瓦片，注册、发布地理信息服务。

[ArcGIS Server](#) 

[GeoServer](http://geoserver.org/)

[MapServer](http://mapserver.org/)

[Mapnik](http://mapnik.org/)

### 1.4  API

[ArcGIS API for JavaScript V3(2D)](https://developers.arcgis.com/javascript/3/)

[ArcGIS API for JavaScript V4(3D)](https://developers.arcgis.com/javascript/4/)

[openlayers(2D)](http://openlayers.org/)

[LeafLet(Mobile)](https://leafletjs.com)

[Mapbox](https://www.mapbox.com/)

[Cesium(3D)](https://cesium.com/)

### 1.5  解决方案

ArcGIS 平台

- ArcMap (数据处理) 
- ArcGIS Server (地图服务) 
- ArcGIS API for JavaScript (二、三维)
- PostgreSQL/PostGIS (数据存储)

开源平台

- uDig (数据处理) 
- Geoserver (地图服务) 
- OpenLayers (二维) 
- Cesium (三维) 
- PostgreSQL/PostGIS (数据存储)



## 2.  WebGIS 应用

### 2.1  基础知识

#### 2.1.1  坐标系

**地理坐标系**（Geographic Coordinate System）：

是使用三维球面来定义地球表面位置，以实现通过经纬度对地球表面点位引用的坐标系。包括角度测量单位、本初子午线和参考椭球体三部分。（实际坐标）

- WGS84（wkid: 4326）[GPS采用的坐标系]
- GCS_Beijing_1954 北京54坐标系（wkid: 4214）
- GCS_Xian_1980  西安80坐标系（wkid: 4610）
- CGS2000（China Geodetic System 2000）（wkid: 4490）

**投影坐标系**（Projection Coordinate System）：

是使用基于 X,Y 值的坐标系统来描述地球上某个点所处的位置。它由地理坐标系和投影方法两个要素所决定。（地图上坐标）

- WGS84 墨卡托投影（wkid: 102100）

#### 2.1.2  底图

[天地图](https://www.tianditu.gov.cn/) -  国家牵头搞得

- 影像底图
- 矢量底图
- 影像注记
- 矢量注记
- 地形晕渲
- 行政区划

你看到的影像底图和矢量底图都是 地图瓦片

> 地图瓦片：瓦片数据是将矢量或影像数据进行预处理，采用高效的缓存机制（如金字塔）形成的缓存图片集，采用“级、行、列”方式进行组织，可在网页中快速加载。因此，瓦片地图加载是根据客户端请求的地图范围和级别，通过计算行列号获取对应级别下网格的瓦片（即服务器预裁剪的图片），由这些瓦片集在客户端形成一张地图，

矢量底图

> 矢量地图：可以对地图数据进行在线编辑、查询分析，具有空间关系，能够支持网络分析、空间分析等应用



#### 2.1.3  地图服务

**WMS**

WMS服务：Web Map Service，网络地图服务，它是利用具有地理空间位置信息的数据制作地图，其中将地图定义为地理数据的可视化表现，能够根据用户的请求，返回相应的地图，包括PNG、GIF、JPEG等栅格形式，或者SVG或者WEB CGM等矢量形式。WMS支持HTTP协议，所支持的操作是由URL决定的。
WMS提供如下操作:

**WMTS**

 (OpenGIS Web Map Title Service)WMTS提供了一种采用预定义图块方法发布数字地图服务的标准化解决方案。WMTS弥补了WMS不能提供分块地图的不足。WMS针对提供可定制地图的服务，是一个动态数据或用户定制地图（需结合SLD标准）的理想解决办法。WMTS牺牲了提供定制地图的灵活性，代之以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。这些固定的图块集使得对WMTS服务的实现可以使用一个仅简单返回已有文件的Web服务器即可，同时使得可以利用一些标准的诸如分布式缓存的网络机制实现伸缩性

**WFS**

网络要素服务（WFS）支持用户在分布式的环境下通过HTTP对地理要素进行插入，更新，删除，检索和发现服务。该服务根据HTTP客户请求返回要素级的GML(Geography Markup Language、地理标识语言)数据，并提供对要素的增加、修改、删除等事务操作，是对Web地图服务的进一步深入。WFS通过OGC Filter构造查询条件，支持基于空间几何关系的查询，基于属性域的查询，当然还包括基于空间关系和属性域的共同查询。

#### 2.1.4  基本功能

- 测距、测面积
- 点，线，面标注
- 切换底图
- 比例尺
- 图层列表
- 图例

### 2.2 分析功能

- 空间查询（地图点 -> 信息）
- 属性查询（信息 -> 地图点）

- 缓冲区分析（辐射范围...）
- 叠加分析（公共区域分析...）
- 热力图（分布、聚集程度...）
- 专题图（分级设色、比例值符号渲染...）

- 网络分析（分析路径、分析可达辐射范围...）

### 2.3  国内开箱即用平台

平台提供底图（矢量图、影像图、注记、路网数据），可进行基本的点（特殊位置标记，标记点信息）、线（路径规划，距离测量）、面（面积测量，覆盖区域）操作，地址坐标查询（正/逆地址解析），定位服务，坐标转换。

- 百度地图
- 高德地图
- 腾讯地图

## 3.  WebGIS 与前端

### 3.1  Web API

[Canvas 2D](https://www.w3.org/TR/2dcontext/)

[WebGL](https://get.webgl.org/)

### 3.2 Vue

**与 Vue 相结合**

- 【百度地图】[Dafrok/vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)  10个月没有维护

- 【高德地图】[ElemeFE/vue-amap](https://github.com/ElemeFE/vue-amap) 2年没有维护

- 【腾讯地图】webpack 进行第三方包处理

- 【ArcGIS】[Esri/esri-loader](https://github.com/Esri/esri-loader) 14天前维护
  - 与 Dojo 深度绑定 AMD模块化规范

- 【OpenLayers】原生支持 ES Modules

- 【cesium】webpack 进行第三方包处理

### 3.3  WebGIS 类

```
Map  
// 地图容器

Source
// 图层数据源

Layer
// 图层，包括GraphicLayer，ArcGISDynamicMapServiceLayer，ArcGISImageServiceLayer，ArcGISTiledMapServiceLayer，FeatureLayer，LabelLayer，WMSLayer等。

Geometry
// 矢量要素信息，包括点（Point），线（Polyline），面（Polygon）等。

Symbol
// 要素符号化信息，点线面的颜色大小形状等控制。包括：SimpleMarkerSymbol, PictureMarkerSymbol，SimpleLineSymbol, CartographicLineSymbol，SimpleFillSymbol, PictureFillSymbol， TextSymbol等

Attribute
// 要素属性信息
```



## 4.  WebGIS 存在的问题

- 数据
  - 数据保密问题
  - 数据生产成本大
  - 数据时效性问题
- 技术
  - 技术高度依赖国外
  - 框架定制技术难度高
  - 应用开发坑多
- 硬件
  - 服务器性能需要高
  - 服务器带宽
  - 客户端网速、配置

## 5.  DEMO

以前的项目：[诸城市乡村振兴一张图](http://yzt.zc.weifang.gov.cn:9051/ZhuCheng/HuiNong/zhongzhixinxi/MapZhongzhileixing.html)



## 6.  参考资料

[Projected Coordinate Systems](https://developers.arcgis.com/javascript/3/jshelp/pcs.html)

[Geographic Coordinate Systems](https://developers.arcgis.com/javascript/3/jshelp/gcs.html)

[地图切片原理](http://webgis.cn/tiles-priciple.html)

[OGC (Open Geospatial Consortium)](https://www.ogc.org/)

[wms、wmts、wfs等地图服务区别](https://blog.csdn.net/qq_18298439/article/details/93329098?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)

