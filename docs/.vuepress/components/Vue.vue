<template>
  <div class="Vue">
    <div class="mid">
      <div>Vue 内部索引</div>
      <ul>
        <li @click="handle('Vue')">Vue</li>
        <li @click="handle('Vue-router')">Vue-router</li>
        <li @click="handle('Vuex')">Vuex</li>
        <li @click="handle('Vue-CLI')">Vue-CLI</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handle(type) {
      this.$router.push("/Vue/" + type);
    }
  }
};
</script>

<style>
.Vue {
  height: 160px;
  width: 180px;
  /* background-color: rgba(255, 255, 255, 1); */
  background-color: #fcfcfc;
  position: fixed;
  top: 3.8rem;
  right: 10px;
  border: 1px solid #e6ecf1;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.Vue .mid {
  width: 120px;
  margin: 5px auto;
}

.Vue .mid li:hover {
  cursor: pointer;
  color: rgb(66, 185, 131);
}
</style>
