<template>
  <label class="checkbox">
    <input
      type="checkbox"
      @click="
        (ev) => {
          emit('update:modelValue', ev.target?.checked);
          emit('onClick', ev);
        }
      "
      :checked="modelValue"
      :disabled="disabled"
    />
    <span class="checkmark"></span>
    <div class="text" v-if="label">{{ label }}</div>
  </label>
</template>

<script setup lang="ts">
export interface CheckboxProps {
  label?: string;
  modelValue?: any;
  disabled?: boolean;
}

withDefaults(defineProps<CheckboxProps>(), {});

const emit = defineEmits(["update:modelValue", "onClick"]);
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  user-select: none;
  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:has(input:disabled) {
    opacity: 0.7;
    cursor: not-allowed;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ccc;
    border-radius: 5px;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: var(--primary);
  }
  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }
  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>
