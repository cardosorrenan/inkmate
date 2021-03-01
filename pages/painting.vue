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
      <PaintingDimensionsRange />
      <PaintingItemWall />
    </CustomCard>
    <ToastNotification ref="notify" />
  </b-container>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import Validating from '../functions/Validating'

export default {
  name: 'Paiting',
  data () {
    return {
      quantityWalls: 4,
      currentWallId: 1
    }
  },
  computed: {
    ...mapGetters({
      currentWall: 'walls/wall'
    })
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
      this.persistCurrentWallById(this.currentWallId)
      const alerts = Validating.validatingEntriesWall(this.currentWall)
      if (alerts.length === 0) {
        if (this.currentWallId < this.quantityWalls) {
          this.currentWallId++
          this.changeCurrentWallById(this.currentWallId)
          this.$refs.notify.createToast('Very good!', `Wall ${this.currentWallId}/4 was defined`, 'success')
        }
      } else {
        alerts.map((alert, index) => this.$refs.notify.createToast('Check the Entries!', alert.message, 'danger'))
      }
    }
  }
}
</script>
