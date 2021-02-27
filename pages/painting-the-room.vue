<template>
  <div class="container">
    <b-container class="d-flex align-items-center">
      <b-card class="d-flex bd-highlight shadow p-3 bg-white rounded pt-0 w-30">
        <b-card-body>
          <b-progress
            :variant="showWallWithID != quantity_walls ? 'primary' : 'success'"
            :max="quantity_walls"
            class="mt-0 pt-0 mb-5"
            show-progress
            animated
          >
            <b-progress-bar :value="showWallWithID">
              <span class=""><strong>{{ showWallWithID * (100/quantity_walls) }} %</strong></span>
            </b-progress-bar>
          </b-progress>
          <div v-for="wallID in array_walls" :key="wallID">
            <PanelDimensions v-show="showWallWithID == wallID" :wall-id="wallID" />
          </div>
          <b-button
            variant="outline-primary"
            :disabled="showWallWithID == 1"
            @click="previousWall()"
          >
            Previous
          </b-button>
          <b-button
            variant="outline-primary"
            :disabled="showWallWithID == quantity_walls"
            @click="nextWall()"
          >
            Next
          </b-button>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
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
