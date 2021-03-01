<template>
  <div class="border-top border-muted pt-2">
    <div class="d-flex align-items-center">
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="decrease('lengthWall')"
      >
        -
      </button>
      <b-form-input
        id="range-2"
        v-model="lengthWall"
        type="range"
        min="1.0"
        max="15.0"
        step="0.01"
        class="mx-3"
      />
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="increase('lengthWall')"
      >
        +
      </button>
    </div>
    <div style="font-size: 10pt" class="d-flex justify-content-start align-items-center my-2">
      <p class="text-muted p-0 m-0">
        Length
      </p>
      <p class="rounded p-2 m-0 ml-2">
        {{ lengthWall }} m
      </p>
    </div>
    <div class="d-flex align-items-center">
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="decrease('heightWall')"
      >
        -
      </button>
      <b-form-input
        id="range-2"
        v-model="heightWall"
        type="range"
        min="1.0"
        max="15.0"
        step="0.01"
        class="mx-3"
      />
      <button
        type="button"
        class="control-button shadow p-1 bd-highlight bg-white rounded"
        @click="increase('heightWall')"
      >
        +
      </button>
    </div>
    <div style="font-size: 10pt" class="d-flex justify-content-start align-items-center my-2">
      <p class="text-muted p-0 m-0">
        Height:
      </p>
      <p class="rounded p-2 m-0 ml-2">
        {{ heightWall }} m
      </p>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentWall: 'walls/wall'
    }),
    lengthWall: {
      get () {
        return this.currentWall.lengthWall
      },
      set (value) {
        this.updateWallByProperty({ property: 'lengthWall', value })
      }
    },
    heightWall: {
      get () {
        return this.currentWall.heightWall
      },
      set (value) {
        this.updateWallByProperty({ property: 'heightWall', value })
      }
    }
  },
  methods: {
    ...mapMutations({
      updateWallByProperty: 'walls/updateWallByProperty'
    }),
    increase (property) {
      const before = parseFloat(this.currentWall[property])
      const value = (before + 0.01).toFixed(2)
      this.updateWallByProperty({ property, value })
    },
    decrease (property) {
      const before = parseFloat(this.currentWall[property])
      const value = (before - 0.01).toFixed(2)
      this.updateWallByProperty({ property, value })
    }
  }
}
</script>

<style scoped>
  .control-button {
    width: 45px;
    margin: 0px !important;
    padding: 0px !important;
    background-color: d5d5d5;
    border: 1px solid #d5d5d5;
    color: #f4901d;
    text-align: center;
    font-size: 15pt;
    font-weight: bold;
  }
  #range-2 {
    content: "\e823";
    color: rgba(0, 0, 0, 0.54);
  }
</style>
