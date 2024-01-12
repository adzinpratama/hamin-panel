<template>
  <ModalDefault
    ref="modalRef"
    :close-icon="false"
    @onclose="confirmDialog.onDismiss.value"
  >
    <div class="dialog">
      <div class="dialog__icon">
        <Icon icon="bi:question-lg" />
      </div>
      <div class="dialog__content">
        <h2>{{ confirmDialog.title.value }}</h2>
        <p>{{ confirmDialog.message.value }}</p>
        <div class="dialog__content-btn">
          <button class="btn-alg" @click="dismiss">Batal</button>
          <button
            type="button"
            :class="[
              'btn-alg btn-primary',
              { load: confirmDialog.loading.value },
            ]"
            @click="accept"
          >
            <span class="text">Ya</span>
          </button>
        </div>
      </div>
    </div>
  </ModalDefault>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { useConfirm } from "../../composables/useConfirm";
import ModalDefault from "./ModalDefault.vue";

const modalRef = ref<any>();
const { confirmDialog, declareRef, dismiss, accept } = useConfirm();

onMounted(() => declareRef(modalRef.value));
</script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  text-align: center;
  position: relative;
  font-size: 0.9rem;

  img {
    width: 30%;
  }

  &__icon {
    background-color: var(--background-secondary);
    position: absolute;
    top: -2.5rem;
    font-size: 2.5rem;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    box-shadow: var(--block-box-shadow);
    border-radius: 50%;
  }

  &__content {
    //margin-top: 3%;
    padding: 0.8rem 0;

    &-btn {
      margin-top: 0.8rem;
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }
  }
}
</style>
