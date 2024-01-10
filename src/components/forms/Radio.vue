<template>
  <div class="wrap">
    <h4>{{ props.title }}</h4>
    <template v-for="(option, index) in props.options" :key="index">
      <label>
        <input
          type="radio"
          :value="props.reduce(option)"
          :name="props.modelValue"
          @click="emit('update:modelValue', $event.target.value)"
          :checked="props.modelValue == props.reduce(option)"
        />
        <span>{{ props.label ? option[props.label] : option }}</span>
      </label>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: [],
  },
  modelValue: {
    type: String,
    default: null,
  },
  reduce: {
    type: Function,
    default: (option) => option,
  },
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});

const emit = defineEmits("modelValue");
</script>

<style lang="scss" scoped>
/* @import "../../scss/variable.scss"; */

$color-primary: #154ec1;
.wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;
}

label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;

  input {
    position: absolute;
    left: -9999px;
    &:checked + span {
      background-color: mix(#fff, $color-primary, 84%);
      &:before {
        box-shadow: inset 0 0 0 0.4375em $color-primary;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em; // or something higher...
    transition: 0.25s ease;
    &:hover {
      background-color: mix(#fff, $color-primary, 84%);
    }
    &:before {
      display: flex;
      flex-shrink: 0;
      content: "";
      background-color: #fff;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.375em;
      transition: 0.25s ease;
      box-shadow: inset 0 0 0 0.125em $color-primary;
    }
  }
}
</style>
