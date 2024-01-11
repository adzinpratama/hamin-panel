<template>
  <!-- HTML !-->
  <div class="card">
    <div class="card-header">
      <h4>Buttons</h4>
    </div>
    <div class="card-body">
      <div>
        <h4>Alg Button</h4>
        <div class="section">
          <button class="btn-alg" role="button">.btn-alg</button>
          <button class="btn-alg btn-primary" role="button">
            .btn-alg.btn-primary
          </button>
          <button class="btn-alg btn-danger" role="button">
            .btn-alg.btn-danger
          </button>
          <button class="btn-alg btn-success" role="button">
            .btn-alg.btn-success
          </button>
          <button class="btn-alg btn-info" role="button">
            .btn-alg.btn-info
          </button>
          <button class="btn-alg">
            <Icon icon="bi:images" />
            With Image
          </button>
          <button class="btn-alg" disabled>
            <Icon icon="bi:images" />
            Disabled
          </button>
          <button class="btn-alg btn-rounded">
            <Icon icon="bi:images" /> Rounded
          </button>
          <button class="btn-alg btn-icrounded">
            <Icon icon="bi:images" />
          </button>
        </div>
      </div>
      <!-- HTML !-->
      <div>
        <h4>Goog Button</h4>
        <div class="section">
          <button class="btn-goog" role="button">Normal</button>
          <button class="btn-goog btn-primary" role="button">Primary</button>
          <button class="btn-goog btn-success" role="button">success</button>
          <button class="btn-goog btn-info" role="button">info</button>
          <button class="btn-goog btn-danger" role="button">danger</button>
          <button class="btn-goog" role="button">
            <Icon icon="bi:people" />With Image
          </button>
          <button class="btn-goog" role="button">
            <Icon icon="bi:plus" />
          </button>
          <button class="btn-goog" role="button" disabled>Disabled</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  margin: 1rem 0;
  display: flex;
  flex-flow: wrap;
  gap: 0.8rem;
}
</style>
