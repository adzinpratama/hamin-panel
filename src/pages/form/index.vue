<template>
  <!-- <ul>
    <li v-for="rt in route.matched" :key="rt">
      {{ rt }}
    </li>
  </ul> -->
  <div class="nomenu" v-if="route.matched.length < 2">
    <div class="nomenu-hero"></div>
    <div class="grid">
      <router-link
        :to="{ name: rt.name }"
        class="col-4 card card-coin"
        v-for="(rt, i) in route.matched[0].children"
        :key="i"
      >
        <div class="icon">
          <Icon :icon="rt.meta?.icon" />
        </div>
        <h3 class="text-uppercase">{{ rt.meta?.title }}</h3>
        <p>{{ rt?.meta?.description }}</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <div class="breadcrumb">
      <div class="breadcrumb-item">
        <router-link to="/"
          ><Icon icon="ic:baseline-home" />Beranda</router-link
        >
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
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped lang="scss">
.nomenu {
  padding-top: 3rem;
  /* background-color: var(--background-secondary); */
}

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
    font-size: 1rem;
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
      .icon {
        display: none;
      }
    }
  }
}
</style>
