<template>
  <div class="card">
    <div class="card-header"><h4>Form Checkbox</h4></div>
    <div class="card-body">
      <div class="grid">
        <Checkbox class="col-12" label="Support Attribute" />
        <Checkbox class="col-12" label="Support JSON" />
        <Checkbox class="col-12" label="Disabled" disabled />
      </div>
      <Radio
        v-model="forms.gender"
        :options="[
          { label: 'Perempuan', value: 1 },
          { label: 'Laki-Laki', value: 2 },
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "../../components/forms/Checkbox.vue";
import Radio from "../../components/forms/Radio.vue";

const forms = ref({
  gender: 1,
});
</script>

<style scoped></style>
