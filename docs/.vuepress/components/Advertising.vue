<template>
  <div class="Advertising">
    <div>Vue 索引</div>
    <ul>
      <li @click="handle('Vue')">Vue</li>
      <li @click="handle('Vue-router')">Vue-router</li>
      <li @click="handle('Vuex')">Vuex</li>
      <li @click="handle('Vue-CLI')">Vue-CLI</li>
    </ul>
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
.Advertising {
  height: 180px;
  width: 180px;
  /* background-color: rgba(255, 255, 255, 1); */
  background-color: cyan;
  position: fixed;
  top: 3.8rem;
  right: 5px;
  /* border: 1px solid #e6ecf1; */
  border-radius: 5px;
}

.Advertising li:hover {
  cursor: pointer;
  color: rgb(66, 185, 131);
}
</style>
