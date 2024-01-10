<template>
  <div class="form-group">
    <label for="">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" />
    <div class="errors" v-if="errors">*{{ errors }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "@vue/runtime-core";

defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  type: {
    type: String as PropType<
      "text" | "date" | "time" | "datetime-local" | "number"
    >,
    default: "text",
  },
  errors: {
    tpye: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary);
  padding: 0.4rem 0.5rem 0.1rem 0.5rem;
  border-radius: 5px;
  position: relative;
  margin: 0.8rem 0;
  label {
    font-weight: bold;
    font-size: 0.6rem;
    text-transform: uppercase;
    color: var(--text-primary);
  }
  input {
    padding: 0.1rem;
    background-color: var(--background-primary);
    font-size: 0.9rem;
    color: var(--text-primary);
  }
  input,
  input:focus {
    border: none;
    outline: none;
  }

  &:has(input:focus) {
    border: 1.8px solid var(--primary);
  }

  input[type="time"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="datetime-local"]::-webkit-calendar-picker-indicator,
  input[type="number"]::-webkit-inner-spin-button {
    position: absolute;
    bottom: 9px;
    right: 10px;
  }

  .errors {
    position: absolute;
    bottom: -15px;
    font-size: 0.7rem;
    color: var(--danger);
  }

  &:has(.errors) {
    border: 2px solid var(--danger);
    margin-bottom: 16px;
  }
}
</style>
