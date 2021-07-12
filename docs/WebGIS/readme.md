---
sidebar: auto
---

# WebGIS

::: tip 目录：
[[toc]]
:::

## 地图数据处理/生产

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

## 地理信息数据存储

关系型数据使用：基于 PostgreSQL 数据库的 PostGIS、基于 Mysql 数据库的 MySQL Spatial、带有地理目标扩展的 Ingres 数据库

非关系型数据使用 mongodb、HBase 数据库（存储瓦片、图像）

[PostGIS](http://postgis.net/)

[PostgreSQL](https://www.postgresql.org/)

[MySQL](https://www.mysql.com)

[mongodb](https://www.mongodb.com/)

[HBase](https://hbase.apache.org/)

[rasdaman](http://www.rasdaman.org/) （栅格数据库）

[SpatiaLite](http://www.gaia-gis.it/gaia-sins/) (轻量级数据库SQLite空间扩展)

## GIS 服务器

使用GeoServer、MapServer生产地图瓦片，注册、发布地理信息服务。

[ArcGIS Server](#) 

[GeoServer](http://geoserver.org/)

[MapServer](http://mapserver.org/)

[Mapnik](http://mapnik.org/)

[TileCache](http://tilecache.org/)

[MapTiler](https://www.maptiler.com/)

## API

[ArcGIS API for JavaScript V3(2D)](https://developers.arcgis.com/javascript/3/)

[ArcGIS API for JavaScript V4(3D)](https://developers.arcgis.com/javascript/4/)

[openlayers(2D)](http://openlayers.org/)

[LeafLet(Mobile)](https://leafletjs.com)

[Mapbox](https://www.mapbox.com/)

[Cesium(3D)](https://cesium.com/)

## 解决方案

ArcGIS 平台

- ArcMap(数据处理) + ArcGIS Server(地图服务) + ArcGIS API for JavaScript（二、三维）+ PostgreSQL/PostGIS（数据存储）

开源平台

- uDig(数据处理) + Geoserver(地图服务) + OpenLayers(二维) + Cesium(三维) + PostgreSQL/PostGIS（数据存储）
