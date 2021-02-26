<template>
  <NuxtLink class="text-light" :to="to">
    <b-button>
      {{ title }}
    </b-button>
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: {
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  b-button {
    background-color: #3a9bc8;
  }
</style>
