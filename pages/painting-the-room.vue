<template>
  <b-container id="container" class="d-flex align-items-center">
    <CustomCard>
      <b-progress
        :variant="showWallWithID != quantity_walls ? 'primary' : 'success'"
        :max="quantity_walls"
        class="mt-0 pt-0 mb-2"
        show-progress
        animated
      >
        <b-progress-bar :value="showWallWithID">
          <span class=""><strong>{{ showWallWithID * (100/quantity_walls) }} %</strong></span>
        </b-progress-bar>
      </b-progress>
      <div class="d-flex align-items-center justify-content-center mb-4">
        <b-button
          variant="outline-primary mr-2 btn-sm"
          :disabled="showWallWithID == 1"
          @click="previousWall()"
        >
          Previous
        </b-button>
        <b-button
          class="controlButton"
          variant="outline-primary btn-sm"
          :disabled="showWallWithID == quantity_walls"
          @click="nextWall()"
        >
          Next
        </b-button>
      </div>
      <div v-for="wallID in array_walls" :key="wallID">
        <PaintingPanelDimensions v-show="showWallWithID == wallID" :wall-id="wallID" />
        <div class="d-flex justify-content-center justify-content-between">
          <PaintingSelectItemWall v-show="showWallWithID == wallID" type-object="Doors" />
          <PaintingSelectItemWall v-show="showWallWithID == wallID" type-object="Windows" />
        </div>
      </div>
       <b-button
          class="controlButton"
          variant="outline-success btn-sm"
          :disabled="showWallWithID == quantity_walls"
          @click="nextWall()"
        >
          Next
        </b-button>
    </CustomCard>
  </b-container>
</template>

<script>
export default {
  name: 'GetQuantityInk',
  data () {
    return {
      quantity_walls: 4,
      showWallWithID: 1
    }
  },
  computed: {
    array_walls () {
      return [...Array(this.quantity_walls).keys()].map(num => num + 1)
    }
  },
  methods: {
    previousWall () {
      if (this.showWallWithID > 1) {
        this.showWallWithID--
      }
    },
    nextWall () {
      if (this.showWallWithID < this.quantity_walls) {
        this.showWallWithID++
      }
    }
  }
}
</script>
