<template>
  <div>
    <div class="header-lg header-sm text-center text-white">
      <img src="/logo.png" alt="Homework Help Logo" style="width: 7em" />
      <h1 class="text-white border-0">
        {{ header }}
      </h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
@media only screen and (min-width: 1360px) {
  .header-lg {
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 6em;
  }
}

@media only screen and (max-width: 1359px) {
  .header-sm {
    background-color: #303030;
    padding: 6em;
  }
}
</style>
