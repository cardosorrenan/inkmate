<template>
  <div>
    <b-form-group
      id="fieldset-1"
      :description="`Let us know the ${typeDimension}.`"
      label="Enter the value"
      label-for="input-user"
      valid-feedback="Okay, i understood!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <b-form-input id="input-user" v-model="value" :state="state" trim />
    </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    state () {
      return this.value >= 1 && this.value <= 15
    },
    invalidFeedback () {
      if (this.value.length > 0) {
        return 'Please, the dimension must be between 1 meter and 15 meters.'
      }
      return 'Please enter something.'
    }
  }
}
</script>
