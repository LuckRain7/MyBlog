---
sidebar: auto
---

# Cesium

::: tip 目录：
[[toc]]
:::

## 添加点击事件 ScreenSpaceEventHandler

#### new Cesium.ScreenSpaceEventHandler(element)

地址：<https://cesiumjs.org/refdoc/>

```javascript
// 点击事件 获取当前位置坐标
const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
handler.setInputAction(function(evt) {
  var cartesian = viewer.camera.pickEllipsoid(
    evt.position,
    viewer.scene.globe.ellipsoid
  );
  var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
  var lng = Cesium.Math.toDegrees(cartographic.longitude); //经度值
  var lat = Cesium.Math.toDegrees(cartographic.latitude); //纬度值
  var mapPosition = { x: lng, y: lat, z: cartographic.height }; //cartographic.height的值始终为零。
  console.log(mapPosition);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

#### setInputAction(action, type, modifier)

Set a function to be executed on an input event.(设置要在输入事件上执行的函数。)

| Name       | Type     | Description                                                                                                                   |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `action`   | function | Function to be executed when the input event occurs.(输入事件发生时要执行的功能。)                                            |
| `type`     | Number   | The ScreenSpaceEventType of input event.(输入事件的 ScreenSpaceEventType。)                                                   |
| `modifier` | Number   | optionalA KeyboardEventModifier key that is held when a `type` event occurs.(发生类型事件时保持的 KeyboardEventModifier 键。) |

## 标注 LabelGraphics

#### new Cesium.LabelGraphics(options)

| Name                         | Type                                                                      | Default                               | Description                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show`                       | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `true`                                | 可见性                                                                                                                                                                  |
| `text`                       | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA Property specifying the text. Explicit newlines '\n' are supported.（指定文本的属性。支持显式换行符'\ n'。）                                                  |
| `font`                       | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `'30px sans-serif'`                   | optionalA Property specifying the CSS font.                                                                                                                             |
| `style`                      | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `LabelStyle.FILL`                     | optionalA Property specifying the [`LabelStyle`](https://cesiumjs.org/Cesium/Build/Documentation/LabelStyle.html).                                                      |
| `scale`                      | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `1.0`                                 | optionalA numeric Property specifying the scale to apply to the text.                                                                                                   |
| `showBackground`             | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `false`                               | optionalA boolean Property specifying the visibility of the background behind the label.                                                                                |
| `backgroundColor`            | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `new Color(0.165, 0.165, 0.165, 0.8)` | optionalA Property specifying the background [`Color`](https://cesiumjs.org/Cesium/Build/Documentation/Color.html).                                                     |
| `backgroundPadding`          | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `new Cartesian2(7, 5)`                | optionalA [`Cartesian2`](https://cesiumjs.org/Cesium/Build/Documentation/Cartesian2.html) Property specifying the horizontal and vertical background padding in pixels. |
| `pixelOffset`                | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `Cartesian2.ZERO`                     | optionalA [`Cartesian2`](https://cesiumjs.org/Cesium/Build/Documentation/Cartesian2.html) Property specifying the pixel offset.                                         |
| `eyeOffset`                  | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `Cartesian3.ZERO`                     | optionalA [`Cartesian3`](https://cesiumjs.org/Cesium/Build/Documentation/Cartesian3.html) Property specifying the eye offset.                                           |
| `horizontalOrigin`           | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `HorizontalOrigin.CENTER`             | optionalA Property specifying the [`HorizontalOrigin`](https://cesiumjs.org/Cesium/Build/Documentation/HorizontalOrigin.html).                                          |
| `verticalOrigin`             | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `VerticalOrigin.CENTER`               | optionalA Property specifying the [`VerticalOrigin`](https://cesiumjs.org/Cesium/Build/Documentation/VerticalOrigin.html).                                              |
| `heightReference`            | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `HeightReference.NONE`                | optionalA Property specifying what the height is relative to.                                                                                                           |
| `fillColor`                  | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `Color.WHITE`                         | optionalA Property specifying the fill [`Color`](https://cesiumjs.org/Cesium/Build/Documentation/Color.html).                                                           |
| `outlineColor`               | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `Color.BLACK`                         | optionalA Property specifying the outline [`Color`](https://cesiumjs.org/Cesium/Build/Documentation/Color.html).                                                        |
| `outlineWidth`               | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) | `1.0`                                 | optionalA numeric Property specifying the outline width.                                                                                                                |
| `translucencyByDistance`     | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA [`NearFarScalar`](https://cesiumjs.org/Cesium/Build/Documentation/NearFarScalar.html) Property used to set translucency based on distance from the camera.    |
| `pixelOffsetScaleByDistance` | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA [`NearFarScalar`](https://cesiumjs.org/Cesium/Build/Documentation/NearFarScalar.html) Property used to set pixelOffset based on distance from the camera.     |
| `scaleByDistance`            | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA [`NearFarScalar`](https://cesiumjs.org/Cesium/Build/Documentation/NearFarScalar.html) Property used to set scale based on distance from the camera.           |
| `distanceDisplayCondition`   | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA Property specifying at what distance from the camera that this label will be displayed.                                                                       |
| `disableDepthTestDistance`   | [Property](https://cesiumjs.org/Cesium/Build/Documentation/Property.html) |                                       | optionalA Property specifying the distance from the camera at which to disable the depth test to.                                                                       |

## 多边形属性 PolygonGraphics

网址：<https://cesiumjs.org/refdoc/>

new Cesium.PolygonGraphics(options)

| show                     | 可见性 默认 true                                                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| hierarchy                |                                                                                                                                              |
| height                   | 一个数字属性，指定多边形相对于椭球面的高度。                                                                                                 |
| heightReference          | 指定高度相对于的属性。                                                                                                                       |
| extrudedHeight           | 一个数字属性，指定多边形挤出面相对于椭球面的高度。                                                                                           |
| extrudedHeightReference  | 指定 extrudedHeight 相对于什么的属性。                                                                                                       |
| stRotation               | 一个数字属性，指定从北向逆时针旋转多边形纹理。                                                                                               |
| granularity              | 一个数字属性，指定每个纬度和经度点之间的角距离。                                                                                             |
| fill                     | 一个布尔属性，指定是否使用提供的材质填充多边形。                                                                                             |
| material                 | 指定用于填充多边形的材质的属性。 [MaterialProperty ](https://cesiumjs.org/Cesium/Build/Documentation/MaterialProperty.html) 默认 Color.WHITE |
| outline                  | 一个布尔属性，指定是否概述多边形。                                                                                                           |
| outlineColor             | 指定轮廓颜色的属性。 Color.BLACK                                                                                                             |
| outlineWidth             | 一个数字属性，指定轮廓的宽度。                                                                                                               |
| perPositionHeight        | 一个布尔值，指定是否使用每个位置的高度。                                                                                                     |
| closeTop                 | 如果为 false，则从挤出多边形的顶部开始离开。                                                                                                 |
| closeBottom              | 如果为 false，则将拉出多边形的底部留下打开。                                                                                                 |
| arcType                  | 多边形边必须遵循的线条类型。                                                                                                                 |
| shadows                  | 枚举属性，指定多边形是否投射或接收来自每个光源的阴影。                                                                                       |
| distanceDisplayCondition | 一个属性，指定与摄像机的距离，以显示此多边形。                                                                                               |
| classificationType       | 一个枚举属性，指定此多边形是否会在地面上对 terrain，3D Tiles 或两者进行分类。                                                                |
| zIndex                   | 指定用于排序地面几何的 zIndex 的属性。仅在多边形为常量且未指定 height 或 extrudedHeight 时才有效。                                           |

应用：

```javascript
entity.polygon.material = Cesium.Color.fromBytes(0, 191, 255, 200); //设置颜色
entity.polygon.outline = false; //设置外边线颜色
```


