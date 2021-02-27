<template>
  <div>
    <Input dimension-wall="Width" :value="1" />
    <Input dimension-wall="Height" :value="1" />
  </div>
</template>

<script>
export default {
  props: {
    wallId: {
      type: Number,
      required: true
    }
  }
}
</script>
