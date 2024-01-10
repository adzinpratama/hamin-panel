<template>
  <div class="card">
    <div class="card-header">
      <h4>Form Validator</h4>
    </div>
    <div class="card-body">
      <Input
        label="Nama"
        placeholder="Ketikan Nama Lengkap"
        errors="Nama Harus Diisi"
      />
      <Input type="number" label="No telp" errors="No Telp Wajib Diisi" />
      <Input type="date" label="Tanggal Lahir" errors="Tanggal Wajib Diisi" />
      <Input type="time" label="Waktu Lahir" errors="Waktu Wajib Diisi" />
      <Input
        type="datetime-local"
        label="Tanggal dan Waktu Lahir"
        errors="Tanggal, dan Waktu Wajib Diisi"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../../components/forms/Input.vue";
</script>

<style scoped></style>
