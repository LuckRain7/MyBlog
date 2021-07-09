---
sidebar: auto
---

# WebGIS

::: tip 目录：
[[toc]]
:::

## 地图数据生产

> 采集、加工地理信息数据（矢量图、影像图、专题图）

[ArcGIS Desktop](https://desktop.arcgis.com/zh-cn/arcmap/) （行业老大，不开源）

[uDig](http://udig.refractions.net/)

[QGIS](https://www.qgis.org/)

[Grass](https://grass.osgeo.org/)

[OpenEV](http://openev.sourceforge.net/)

[gvSIG](http://www.gvsig.com/)

[OpenJUMP](http://www.openjump.org/)

[OSSIM](http://trac.osgeo.org/ossim/)

[InterImage](http://www.lvc.ele.puc-rio.br/projects/interimage/)（专注影像解译）

[PolSARPro](https://earth.esa.int/web/polsarpro)（极化雷达处理）

[E-foto](http://www.efoto.eng.uerj.br/en) （航空摄影测量）

## 地理信息数据存储

关系型数据使用PostGIS或MySQL Spatial数据库存储地理信息数据和关系型业务数据，

非关系型数据使用mongodb、HBase数据库（瓦片、图像）

PostGIS：http://postgis.net/

PostgreSQL：https://www.postgresql.org/

MySQL：https://www.mysql.com

mongodb ： https://www.mongodb.com/

HBase:https://hbase.apache.org/

rasdaman：http://www.rasdaman.org/ （栅格数据库）

SpatiaLite:http://www.gaia-gis.it/gaia-sins/ (轻量级数据库SQLite空间扩展)

## 解决方案

ArcGIS平台

*  ArcGIS(数据处理) + ArcGIS Server(地图服务) + ArcGIS API for JavaScript（二、三维）

开源平台

*  uDig(数据处理) + Geoserver(地图服务) + OpenLayers(二维) + Cesium(三维)
