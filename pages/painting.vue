<template>
  <b-container id="container" class="d-flex align-items-center">
    <CustomCard>
      <b-progress
        :variant="currentWallId != quantityWalls ? 'primary' : 'success'"
        :max="quantityWalls"
        class="mt-0 pt-0 mb-2"
        show-progress
        animated
      >
        <b-progress-bar :value="currentWallId">
          <span class=""><strong>{{ currentWallId * (100/quantityWalls) }} %</strong></span>
        </b-progress-bar>
      </b-progress>
      <div class="d-flex align-items-center justify-content-center mb-4">
        <b-button
          variant="outline-primary mr-2 btn-sm"
          :disabled="currentWallId == 1"
          @click="previousWall()"
        >
          Previous
        </b-button>
        <b-button
          class="controlButton"
          variant="outline-primary btn-sm"
          :disabled="currentWallId == quantityWalls"
          @click="nextWall()"
        >
          Next
        </b-button>
      </div>
      <PaintingDimensionRange />
      <!--div class="d-flex justify-content-center justify-content-between">
        <PaintingItemWall label="Doors" />
        <PaintingItemWall label="Windows" />
      </div> -->
    </CustomCard>
  </b-container>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Paiting',
  data () {
    return {
      quantityWalls: 4,
      currentWallId: 1
    }
  },
  methods: {
    ...mapMutations({
      changeCurrentWallById: 'walls/changeCurrentWallById',
      persistCurrentWallById: 'walls/persistCurrentWallById'
    }),
    previousWall () {
      if (this.currentWallId > 1) {
        this.persistCurrentWallById(this.currentWallId)
        this.currentWallId--
        this.changeCurrentWallById(this.currentWallId)
      }
    },
    nextWall () {
      if (this.currentWallId < this.quantityWalls) {
        this.persistCurrentWallById(this.currentWallId)
        this.currentWallId++
        this.changeCurrentWallById(this.currentWallId)
      }
    }
  }
}
</script>
