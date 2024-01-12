<template>
  <div class="card">
    <div class="card-header">
      <h4>Tooltip List Example</h4>
    </div>
    <div class="card-body">
      <div class="actions">
        <div class="btn-goog" v-tooltip="'Normal'">Tooltip Normal</div>
        <div class="btn-goog" v-tooltip:left="'Left'">Tooltip Left</div>
        <div class="btn-goog" v-tooltip:right="'Right'">Tooltip Right</div>
        <div class="btn-goog" v-tooltip:bottom="'Bottom'">Tooltip Bottom</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  div {
    width: fit-content;
  }
}
</style>
