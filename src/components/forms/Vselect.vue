<template>
  <div class="form-group">
    <label for="" v-if="label">{{ label }}</label>
    <vSelect
      :options="options"
      :label="optionLabel"
      :reduce="reduce"
      :searchable="searchable"
      :placeholder="placeholder"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
      @option:selected="emit('option:selected', $event)"
      @option:deselected="emit('option:deselected', $event)"
      :clearable="clearable"
    >
      <slot></slot>
    </vSelect>
    <div class="errors" v-if="errors">{{ errors }}</div>
  </div>
</template>

<script setup lang="ts">
import vSelect from "vue-select";

export interface VselectProps {
  label?: string;
  placeholder?: string;
  options?: Array<any>;
  searchable?: boolean;
  optionLabel?: string;
  reduce?: Function;
  errors?: string;
  disabled?: boolean;
  clearable?: boolean;
}

withDefaults(defineProps<VselectProps>(), {
  searchable: true,
  clearable: true,
  reduce: (op: any) => op,
});

const emit = defineEmits([
  "update:modelValue",
  "option:selected",
  "option:deselected",
]);
</script>

<style scoped></style>
