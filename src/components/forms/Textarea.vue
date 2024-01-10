<template>
  <div class="form-group">
    <label for="" v-if="label">{{ label }}</label>
    <textarea
      :rows="rows"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event?.target?.value)"
      @keyup="emit('keyup', $event)"
    ></textarea>
    <div class="errors" v-if="errors">{{ errors }}</div>
  </div>
</template>

<script setup lang="ts">
export interface TextareaProps {
  label?: string;
  placeholder?: string;
  modelValue?: any;
  disabled?: boolean;
  errors?: string;
  rows?: number;
}

withDefaults(defineProps<TextareaProps>(), {
  rows: 5,
});

const emit = defineEmits(["update:modelValue", "keyup"]);
</script>

<style scoped></style>
