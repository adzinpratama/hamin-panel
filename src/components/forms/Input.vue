<template>
  <div class="form-group">
    <label for="">{{ label }}</label>
    <input
      ref="inRef"
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="emit('update:modelValue', $event?.target?.value)"
      :disabled="disabled"
      @keyup="emit('keyup', $event)"
    />
    <div class="errors" v-if="errors">{{ errors }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const inRef = ref<any>(null);
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "date" | "time" | "datetime-local" | "number";
  modelValue?: any;
  min?: string;
  max?: string;
  disabled?: boolean;
  errors?: string;
}

withDefaults(defineProps<InputProps>(), {
  type: "text",
  disabled: false,
});

const emit = defineEmits(["update:modelValue", "keyup"]);

const _toFocus = (): void => {
  inRef.value.focus();
};

defineExpose({ toFocus: _toFocus });
</script>

<style lang="scss" scoped></style>
