<template>
  <div>
    <div class="d-flex align-items-center">
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="decrement()"
      >
        -
      </button>
      <b-form-input
        id="range-2"
        v-model="value"
        type="range"
        min="1.0"
        max="15.0"
        step="0.01"
        class="mx-3"
      />
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="increment()"
      >
        +
      </button>
    </div>
    <div style="font-size: 10pt" class="d-flex justify-content-start align-items-center mt-2 mb-4">
      <p class="text-muted p-0 m-0">
        {{ dimensionWall }}:
      </p>
      <p class="border border-muted rounded p-2 m-0 ml-2">
        {{ value }} m
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dimensionWall: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: 1.0
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
  },
  methods: {
    increment () {
      if (this.value < 15) {
        this.value = (parseFloat(this.value) + 0.01).toFixed(2)
      }
    },
    decrement () {
      if (this.value > 1) {
        this.value = (parseFloat(this.value) - 0.01).toFixed(2)
      }
    }
  }
}
</script>

<style scoped>
  .control-button {
    width: 45px;
    margin: 0px !important;
    padding: 0px !important;
    background-color: white;
    border: 1px solid #007bff;
    color: #007bff;
    text-align: center;
    font-size: 15pt;
    font-weight: 500;
  }
</style>
