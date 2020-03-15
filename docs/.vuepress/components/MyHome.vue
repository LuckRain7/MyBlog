<template>
  <div class="page">
    <div class="zzyhome">
      <!-- 左侧 -->
      <div class="myhome home-one">
        <div class="one-img"></div>
      </div>
      <!-- 中间部分 -->
      <div class="myhome home-two">
        <div class="two-content">
          <h1 style="right:20px;">你好,</h1>
          <h1>我是震雨,</h1>
          <h1>一个前端学习者。</h1>
          <h3>爱好滑板、编程...</h3>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="myhome home-there">
        <div class="there-img"></div>
      </div>
    </div>
  </div>
</template>
<style>
.page{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
.zzyhome {
  height: 700px;
  width: 100%;
  margin: 0 auto;
}

.myhome {
  height: 700px;
}
.home-one {
  width: 20%;
  float: left;
}
.home-one .one-img {
  margin-top: 160px;
  float: right;
  background: url(/code1.jpg);
  height: 540px;
  width: 80%;
  z-index: 99;
}
.home-two {
  width: 60%;
  float: left;
}

.home-two .two-content {
  width: 350px;
  margin: 25% auto;
  font-family: "plantc", "Source Han Serif", serif;
}
.home-there {
  width: 20%;
  float: left;
}

.home-there .there-img {
  float: left;
  background: url(/code2.jpg);
  height: 540px;
  width: 80%;
  z-index: 99;
}
</style>
