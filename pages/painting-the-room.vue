<template>
  <b-container id="container" class="d-flex align-items-center">
    <CustomCard>
      <b-progress
        :variant="showWallWithID != quantityWalls ? 'primary' : 'success'"
        :max="quantityWalls"
        class="mt-0 pt-0 mb-2"
        show-progress
        animated
      >
        <b-progress-bar :value="showWallWithID">
          <span class=""><strong>{{ showWallWithID * (100/quantityWalls) }} %</strong></span>
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
          :disabled="showWallWithID == quantityWalls"
          @click="nextWall()"
        >
          Next
        </b-button>
      </div>
      <div v-for="idWall in arrayWalls" :key="idWall">
        <div v-show="showWallWithID === idWall">
          <PaintingDimensionRange :id-wall="idWall" label="Width" />
          <PaintingDimensionRange :id-wall="idWall" label="Height" />
          <div class="d-flex justify-content-center justify-content-between">
            <PaintingItemWall :id-wall="idWall" label="Doors" />
            <PaintingItemWall :id-wall="idWall" label="Windows" />
          </div>
        </div>
      </div>
    </CustomCard>
  </b-container>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'GetQuantityInk',
  data () {
    return {
      quantityWalls: 4,
      showWallWithID: 1
    }
  },
  computed: {
    arrayWalls () {
      return [...Array(this.quantityWalls).keys()].map(num => num + 1)
    }
  },
  created () {
    this.instanceWalls(this.quantityWalls)
  },
  methods: {
    previousWall () {
      if (this.showWallWithID > 1) {
        this.showWallWithID--
      }
    },
    nextWall () {
      if (this.showWallWithID < this.quantityWalls) {
        this.showWallWithID++
      }
    },
    ...mapMutations({
      instanceWalls: 'walls/instanceWalls'
    })
  }
}
</script>
