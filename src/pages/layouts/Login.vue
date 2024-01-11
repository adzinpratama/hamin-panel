<template>
  <div class="container">
    <div class="login">
      <div class="login-header">
        <div class="login-header-short">
          <img src="../../assets/logos/logo.png" alt="Logo Melinda" />
        </div>
        <div class="login-header-long">
          <img src="../../assets/logos/logo_string.png" alt="Logo Melinda" />
        </div>
      </div>
      <div class="card login-content">
        <h2>SIMRS APP</h2>
        <div class="grid">
          <Input label="Email" class="col-12" />
          <Input label="Password" class="col-12" type="password" />
          <div class="col-12">
            <button class="btn-goog w-100" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import Input from "../../components/forms/Input.vue";
import { useAuthStore } from "../../stores/auth";

const auth = useAuthStore();

const login = () => auth.login();
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &-short {
      img {
        width: 3rem;
        height: 3rem;
      }
      padding: 0.4rem;
      display: flex;
      align-items: center;
      border-radius: 50%;
      box-shadow: var(--block-box-shadow);
      background-color: var(--background-secondary);
    }
    &-long {
      width: fit-content;
      height: 2rem;
    }
  }
  h2 {
    padding: 1rem;
    text-align: center;
  }
}
.w-100 {
  width: 100%;
}
</style>
