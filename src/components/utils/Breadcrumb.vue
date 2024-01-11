<template>
  <div class="breadcrumb">
    <div class="breadcrumb-item">
      <router-link to="/"><Icon icon="ic:baseline-home" />Beranda</router-link>
      <Icon icon="ic:outline-arrow-forward-ios" class="icon" />
    </div>
    <div class="breadcrumb-item" v-for="(rt, i) in route.matched" :key="i">
      <router-link :to="{ name: rt.name }">
        <Icon :icon="rt.meta?.icon" />
        {{ rt.meta?.title }}
      </router-link>
      <Icon icon="ic:outline-arrow-forward-ios" class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0 0.5rem;
  width: 100%;
  background-color: var(--background-secondary);
  border-radius: 5px;

  &-item {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    color: var(--text-gray);
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    opacity: 0.7;
    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--text-primary);
      text-decoration: none;
    }
    .icon {
      font-weight: 600;
    }

    &:last-child {
      opacity: 1;
      a {
        color: var(--primary);
      }
      .icon {
        display: none;
      }
    }
  }
}
</style>
