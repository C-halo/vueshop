<template>
  <div>
    <h2>Home页面</h2>
    <el-button type="info" @click="exit">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      // 清空token
      window.sessionStorage.clear();
      // 跳转到登录页
      this.$router.replace("/login");
    },
  },
};
</script>

<style>
</style>