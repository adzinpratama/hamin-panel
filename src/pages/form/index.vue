<template>
  <!-- <ul>
    <li v-for="rt in route.matched" :key="rt">
      {{ rt }}
    </li>
  </ul> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
</script>

<style scoped></style>
