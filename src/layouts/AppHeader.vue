<template>
  <div class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="header-logo">
          <div class="header-logo-short">
            <img src="../assets/logos/logo.png" alt="Logo Melinda" />
          </div>
          <div class="header-logo-long">
            <img src="../assets/logos/logo_string.png" alt="Logo Melinda" />
          </div>
        </div>
        <div class="header-action">
          <div
            class="profile"
            @click="profileMenu = !profileMenu"
            v-click-outside="() => (profileMenu = false)"
          >
            <div class="profile-content">
              <div class="profile-avatar">
                <img src="../assets/faces/1.jpg" alt="profile" />
              </div>
              <div class="profile-name">
                <div class="text-bold">Super Saiyah</div>
                <p class="text-muted text-small">Administrator</p>
              </div>
            </div>
            <Transition name="slide-fadeY">
              <div v-if="profileMenu" :class="['profile-menu']">
                <div class="profile-menu-header text-bold">
                  SuperSaiyah@mail.commmm
                </div>
                <div class="profile-menu-content">
                  <div class="profile-menu-item">
                    <Icon
                      icon="material-symbols:manage-accounts-outline"
                    />Profile
                  </div>
                  <div class="profile-menu-item" @click="logout">
                    <Icon icon="tabler:logout" />Logout
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="childrens?.length">
      <div class="header-menu">
        <MenuItem :items="childrens"></MenuItem>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <ul class="sidebar-content">
      <li
        v-for="(rt, i) in routes"
        :key="i"
        :class="{ active: rt.name == route.matched[0]?.name }"
      >
        <router-link :to="{ name: rt.name }" class="sidebar-item"
          ><Icon :icon="rt.meta.icon" />
          <div class="text">{{ rt.meta.title }}</div>
        </router-link>
      </li>
    </ul>
  </div>

  <ModalDialog></ModalDialog>
</template>

<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import MenuItem from "../components/header/MenuItem.vue";
import ModalDialog from "../components/modals/ModalDialog.vue";
import { useConfirm } from "../composables/useConfirm";
import { useAuthStore } from "../stores/auth";

const profileMenu = ref<Boolean>(false);
const router = useRouter();
const route = useRoute();
const routes = computed(() =>
  router.getRoutes()?.filter((el: any) => el?.meta?.isParent)
);

const childrens = computed(() => route.matched[0]?.children);
const auth = useAuthStore();
const confirm = useConfirm();

const logout = () => {
  confirm.require({
    title: "Yakin ingin keluar ?",
    message: "",
    onAccept: () => auth.logout(),
  });
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background-primary);
  z-index: 10;

  &-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    align-items: center;
    /* border-bottom: 1px solid var(--shadow); */
  }
  &-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &-short {
      width: 3rem;
      height: 3rem;
    }

    &-long {
      width: fit-content;
      height: 1.5rem;
    }
  }
}

.profile {
  position: relative;
  display: inline-block;
  width: 200px;
  &-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 30px;
    background-color: var(--background-secondary);
    &:hover {
      box-shadow: var(--block-box-shadow);
    }
  }
  &-avatar {
    width: 35px;
    height: 35px;
    img {
      border-radius: 50%;
    }
  }
  &-menu {
    position: absolute;
    width: 100%;
    height: fit-content;
    /* padding: 1.2rem; */
    /* top: 140%; */
    background-color: var(--background-secondary);
    box-shadow: var(--block-box-shadow);
    /* gap: 0.5rem; */
    border-radius: 10px;
    border-top: 3px solid var(--primary);
    /* display: none; */
    /* transition: top 0.3s ease-in; */
    &.show {
      display: block;
      /* top: 120%; */
    }
    &-header {
      padding: 0.5rem 1.2rem;
      /* padding-bottom: 0.5rem; */
      border-bottom: 1px solid var(--shadow);
      /* word-break: break-all; */
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-content {
      /* display: flex; */
      /* flex-direction: column; */
      /* padding-bottom: 1rem; */
    }
    &-item {
      padding: 0.5rem 1.2rem;
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: var(--background-primary);
        color: var(--primary);
      }
    }
  }
}
/* .header-menu {
  display: flex;
  list-style: none;
  gap: 1rem;
  background: var(--background-secondary);
  box-shadow: var(--block-box-shadow);
  padding: 0.5rem;
  border-radius: 10px;
  position: relative;

  li {
    padding: 0.5rem;
    margin-bottom: 0.1rem;
    width: fit-content;
    &:has(a:hover),
    &.active {
      background-color: var(--background-primary);
      border-radius: 5px;
      a {
        color: var(--primary);
        font-weight: 500;
      }
    }
  }
  li a {
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

} */
</style>
