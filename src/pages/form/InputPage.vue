<template>
  <div class="card">
    <div class="card-header"><h4>Form Input</h4></div>
    <div class="card-body">
      <div class="grid">
        <div class="col-6">
          <Input label="Nama" v-model="formIn.name"></Input>
        </div>
        <div class="col-6">
          <Input label="Email" v-model="formIn.email"></Input>
        </div>
        <div class="col-3">
          <Input label="No Hp" type="number" v-model="formIn.phone"></Input>
        </div>
        <div class="col-3">
          <Input type="date" label="Tanggal Lahir" />
        </div>
        <div class="col-6">
          <Input type="time" label="Waktu Lahir" />
        </div>
        <div class="col-6">
          <Input type="datetime-local" label="Tanggal dan Waktu Lahir" />
        </div>
        <div class="col-6">
          <Input label="Disabled" disabled />
        </div>
        <div class="col-12">
          <Textarea
            label="Textarea"
            placeholder="Ketikan panjang disini ..."
          ></Textarea>
        </div>
      </div>
      <div>{{ formIn }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import Input from "../../components/forms/Input.vue";
import Textarea from "../../components/forms/Textarea.vue";

const formIn = ref({
  name: "Hapra Dev",
  email: null,
  phone: null,
  date: null,
  time: null,
  datetime: null,
  disabled: null,
});
</script>

<style lang="scss" scoped></style>
