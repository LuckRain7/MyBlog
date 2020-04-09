<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-04-08 22:38:04
 -->
<template>
  <div class="Tools">
    <div class="rbgtohex">
      <p>GRB 转 16 进制</p>
      <input type="text" id="rbg" />
      <button @click="RGB2Hex">go</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    RGB2Hex() {
      let RGBDom = document.querySelector("#rbg");
      let rgb = RGBDom.value;
      console.log(rgb);

      var re = rgb.split(","); //利用正则表达式去掉多余的部分
      console.log(re);

      var hexColor = "#";
      var hex = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      for (var i = 0; i < 3; i++) {
        var r = null;
        var c = re[i];
        var hexAr = [];
        while (c > 16) {
          r = c % 16;
          c = (c / 16) >> 0;
          hexAr.push(hex[r]);
        }
        hexAr.push(hex[c]);
        hexColor += hexAr.reverse().join("");
      }

      RGBDom.value = hexColor;
    },
  },
};
</script>

<style></style>
