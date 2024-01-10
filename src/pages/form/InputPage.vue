<template>
  <div class="card">
    <div class="card-header"><h4>Form Input</h4></div>
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <Input label="Nama"></Input>
        </div>
        <div class="col-6">
          <Input label="Email"></Input>
        </div>
        <div class="col-6">
          <Input label="No Hp" type="number"></Input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../../components/forms/Input.vue";
import { ref } from "@vue/reactivity";

const inRef = ref<any>(null);
const emit = defineEmits(["modelValue", "keyup"]);

const _toFocus = () => {
  inRef.value.focus();
};

defineExpose({ toFocus: _toFocus });
</script>

<style lang="scss" scoped></style>
