<template>
  <div class="card">
    <div class="card-header">
      <h4>Modal page</h4>
    </div>
    <div class="card-body">
      <div class="actions">
        <button class="btn-alg" @click="mDefaultRef?.show()">
          Modal Default
        </button>
        <button class="btn-alg btn-rounded btn-danger" @click="onConfirm">
          <Icon icon="octicon:question-16" />Modal Dialog
        </button>
      </div>
    </div>
  </div>
  <ModalDefault ref="mDefaultRef">
    <div class="card">ini halaman Modal</div>
  </ModalDefault>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import ModalDefault from "../../components/modals/ModalDefault.vue";
import { useConfirm } from "../../composables/useConfirm";

const mDefaultRef = ref<any>();
const confirm = useConfirm();

const onConfirm = () => {
  confirm.require({
    onDismiss: () => console.log("dismessed page"),
    onAccept: () => alert("accepted"),
  });
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-flow: wrap;
}
</style>
