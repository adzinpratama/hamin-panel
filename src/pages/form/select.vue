<template>
  <div class="card">
    <div class="card-header">
      <h4>Form Select</h4>
    </div>
    <div class="card-body">
      <div class="grid">
        <Input label="Name" class="col-12" />
        <Vselect
          class="col-6"
          :options="options"
          label="UnSearchable"
          option-label="name"
          :searchable="false"
        ></Vselect>
        <Vselect
          class="col-6"
          :options="options"
          label="Placeholder"
          placeholder="cari sesuatu disini"
          option-label="name"
          v-model="forms.unsearcable"
          :reduce="(op:any)=>op.name"
          @option:selected="(ev) => ev"
        ></Vselect>
        <Vselect
          class="col-12"
          :options="options"
          label="Error"
          errors="Tidak boleh kosong"
          option-label="name"
        ></Vselect>
        <Vselect
          class="col-12"
          :options="options"
          label="Disabled"
          disabled
          option-label="name"
        ></Vselect>
      </div>
      {{ forms }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Input from "../../components/forms/Input.vue";
import Vselect from "../../components/forms/Vselect.vue";

const options: Array<any> = [
  {
    id: 1,
    name: "Maman Suparman",
  },
  {
    id: 2,
    name: "Inggit Subagyo",
  },
];

const forms = ref({
  unsearcable: null,
  isSelected: null,
});
</script>

<style lang="scss" scoped></style>
