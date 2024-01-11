<template>
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
    <Breadcrumb></Breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Breadcrumb from "../../components/utils/Breadcrumb.vue";
const route = useRoute();
</script>

<style scoped lang="scss">
.nomenu {
  padding-top: 3rem;
  /* background-color: var(--background-secondary); */
}
</style>
