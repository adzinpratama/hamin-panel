<template>
  <ul>
    <li
      v-for="(rt, i) in items"
      :key="i"
      :class="{ active: rt.name == route.matched[1]?.name }"
    >
      <router-link
        :to="{ name: rt.children?.length ? rt.children[0]?.name : rt.name }"
      >
        <Icon :icon="rt.meta?.icon" />
        {{ rt.meta?.title }}
      </router-link>
      <template v-if="rt.children?.length">
        <MenuItem :items="rt.children"></MenuItem>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRoute } from "vue-router";
const route = useRoute();

export interface MenuItemProps {
  items?: RouteRecordRaw[];
}

withDefaults(defineProps<MenuItemProps>(), {});
</script>
