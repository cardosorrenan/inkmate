<template>
  <div class="w-40 mb-4">
    <p style="font-size: 10pt" class="text-muted p-0 m-0 mb-2">
      {{ typeObject }}
    </p>
    <b-form-spinbutton id="sb-small" v-model="value" size="sm" min="0" max="100" />
  </div>
</template>

<script>
export default {
  props: {
    typeObject: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>
