<template>
  <div class="w-40 mb-4">
    <p style="font-size: 10pt" class="text-muted p-0 m-0 mb-2">
      {{ label }}
    </p>
    <b-form-spinbutton id="sb-small" v-model="value" size="sm" min="0" max="100" />
  </div>
</template>

<script>
export default {
  props: {
    idWall: {
      type: Number,
      required: true
    },
    label: {
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
