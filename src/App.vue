<script setup lang="ts">
import AppHeader from "./layouts/AppHeader.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <AppHeader></AppHeader>
  <div
    :class="['container content', { hmenu: route.matched[0]?.children.length }]"
  >
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 5rem;
  &.hmenu {
    margin-top: 9rem;
  }
}
</style>
