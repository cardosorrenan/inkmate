<template>
  <b-container id="container" class="d-flex align-items-center">
    {{ currentWall }}
    <CustomCard>
      <b-progress
        :variant="currentWallId != quantityWalls + 1 ? 'primary' : 'success'"
        :max="quantityWalls"
        class="mt-0 pt-0 mb-2"
        show-progress
        animated
      >
        <b-progress-bar :value="currentWallId - 1">
          <span class=""><strong>{{ (currentWallId - 1) * (100/quantityWalls) }} %</strong></span>
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
          :disabled="currentWallId == quantityWalls + 1"
          class="controlButton"
          variant="outline-primary btn-sm"
          @click="nextWall()"
        >
          Next
        </b-button>
      </div>
      <PaintingDimensionsRange />
      <PaintingItemWall />
    </CustomCard>
    <CustomCard>
      <b-button
          :disabled="currentWallId != quantityWalls + 1"
          class="controlButton"
          variant="outline-success btn-sm"
          @click="sendArea()"
        >
          Get the Gallons!
        </b-button>
    </CustomCard>
    <ToastNotification ref="notify" />
  </b-container>
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
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
      currentWall: 'walls/wall',
      areaWalls: 'walls/getAreaFromWalls',
      gallons: 'gallons/getFetchedGallons'
    })
  },
  methods: {
    ...mapActions({
      fetchGallons: 'gallons/fetchGallons'
    }),
    ...mapMutations({
      changeCurrentWallById: 'walls/changeCurrentWallById',
      persistCurrentWallById: 'walls/persistCurrentWallById'
    }),
    previousWall () {
      this.persistCurrentWallById(this.currentWallId)
      this.currentWallId--
      this.changeCurrentWallById(this.currentWallId)
    },
    nextWall () {
      this.persistCurrentWallById(this.currentWallId)
      const alerts = Validating.validatingEntriesWall(this.currentWall)
      if (alerts.length === 0) {
        this.currentWallId++
        if (this.currentWallId !== this.quantityWalls + 1) {
          this.changeCurrentWallById(this.currentWallId)
        }
      } else {
        alerts.map(alert => this.$refs.notify.createToast('Check the Entries!', alert.message, 'danger'))
      }
    },
    sendArea () {
      this.fetchGallons({ myRoomArea: this.areaWalls })
    }
  }
}
</script>
