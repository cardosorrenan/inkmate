<template>
  <NuxtLink class="text-light" :to="to">
    <b-button class="button shadow">
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
  .button {
    background-color: #f4901d;
    border: 0px;
    color: #f3f3f3
  }
</style>
