<script setup lang="ts">
import AppHeader from "./layouts/AppHeader.vue";
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  margin-top: 9rem;
}
</style>
