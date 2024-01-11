<script setup lang="ts">
import AppHeader from "./layouts/AppHeader.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "@vue/reactivity";
import Login from "./pages/layouts/Login.vue";
import { useAuthStore } from "./stores/auth";

const route = useRoute();
const auth = useAuthStore();
const isLoggedIn = computed(() => auth.isLoggedIn);

auth.cookieLoggedIn;
</script>

<template>
  <template v-if="isLoggedIn">
    <AppHeader></AppHeader>
    <div
      :class="[
        'container content',
        { hmenu: route.matched[0]?.children.length },
      ]"
    >
      <router-view></router-view>
    </div>
  </template>
  <Login v-else />
</template>

<style scoped lang="scss">
.content {
  margin-top: 5rem;
  &.hmenu {
    margin-top: 9rem;
  }
}
</style>
