<template>
  <transition name="fade">
    <div class="modal" v-show="toggle">
      <transition name="drop-in">
        <div class="modal__wrapper" v-show="toggle">
          <div class="modal__close" @click="_close" v-if="closeIcon">
            <Icon icon="bi:x" />
          </div>
          <slot name="header"></slot>
          <div class="modal__inner">
            <slot />
          </div>
          <slot name="footer"></slot>
        </div>
      </transition>
      <div class="overlay" @click="_close"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue-demi";
import { ref } from "@vue/reactivity";

export interface ModelDefaultProps {
  open?: boolean;
  closeIcon?: boolean;
}

withDefaults(defineProps<ModelDefaultProps>(), {
  closeIcon: true,
});

const toggle = ref<Boolean>(false);

const emit = defineEmits(["onclose", "onshow"]);

const _close = () => {
  emit("onclose");
  toggle.value = false;
};

const _show = () => {
  emit("onshow");
  toggle.value = true;
};

const handleKeyUp = (e: any): void => {
  if (e.keyCode == 27) _close();
};

defineExpose({ show: _show, close: _close });

onMounted(() => document.addEventListener("keyup", handleKeyUp));
onUnmounted(() => document.removeEventListener("keyup", handleKeyUp));
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    position: relative;
    min-width: 30%;
    max-width: 80%;
    background-color: #fff;
    z-index: 2;
    border-radius: 10px;
  }
  &__close {
    position: absolute;
    right: -1%;
    top: -4%;
    background-color: var(--background-secondary);
    color: var(--text-primary);
    padding: 0.3rem;
    border-radius: 50%;
    z-index: 3;
    box-shadow: -8px 8px 10px -10px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: all 0.1s ease-in;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      transform: translateY(3px);
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}

@media screen and (max-width: 670px) {
  .modal {
    justify-content: flex-end;
    align-items: flex-end;
    &__inner {
      margin: 0;
    }
    &__wrapper {
      border-radius: 15px 15px 0 0;
      max-width: 100%;
      width: 100%;
    }
    &__close {
      right: 0;
    }
  }
  .drop-in-enter-active,
  .drop-in-leave-active {
    transition: all 0.3s ease-out;
  }
  .drop-in-enter-from,
  .drop-in-leave-to {
    /* opacity: 0; */
    transform: translate(0, 50%);
  }
}
</style>
