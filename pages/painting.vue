<template>
  <b-container id="container" class="d-flex align-items-center">
    <CustomCard v-if="collectingInfo">
      <h6 class="mr-auto mb-3">
        Painting the room:
      </h6>
      <b-progress
        :max="quantityWalls"
        class="mt-0 pt-0 mb-2 bar-gray"
        show-progress
        animated
      >
        <b-progress-bar class="progress-bar-orange" :value="currentWallId - 1">
          <span><strong>{{ (currentWallId - 1) * (100/quantityWalls) }} %</strong></span>
        </b-progress-bar>
      </b-progress>
      <PaintingDimensionsRange />
      <PaintingItemWall />
      <div class="d-flex align-items-center justify-content-center my-2 border-top border-muted pt-3">
        <b-button
          class="btn-sm text-light mr-2 border border-transparent shadow"
          style="background-color: #f4901d"
          :disabled="currentWallId == 1"
          @click="previousWall()"
        >
          Previous
        </b-button>
        <b-button
          class="btn-sm text-light border border-transparent shadow"
          style="background-color: #f4901d"
          :disabled="currentWallId - 1 == quantityWalls"
          @click="nextWall()"
        >
          Next
        </b-button>
      </div>
    </CustomCard>
    <CustomCard v-else class="w-40">
      <b-progress
        :max="100"
        class="mt-0 pt-0 mb-2 bar-gray"
        show-progress
        animated
      >
        <b-progress-bar class="progress-bar-orange" :value="100">
          <span><strong>100 %</strong></span>
        </b-progress-bar>
      </b-progress>
      <div style="font-size: 8pt;" class="d-flex w-100">
        <div class="mt-2 pl-3 w-100">
          <h5 class="mr-auto my-2">
            <b-badge class="shadow" style="background-color: #f4901d" >Results</b-badge>
          </h5>
          <div class="d-flex flex-column align-items-center">
            <strong style="font-size: 12pt">{{ gallons.litersInk }} L to {{ gallons.area }} m²</strong>
            <div class="mb-2 w-100"></div>
            <strong class="mb-2 mr-2">Purchasing options</strong>
          </div>
          <div
            v-for="(product) in gallons.results"
            :key="product.prod_code"
            class="d-flex flex-column align-items-start border-top border-muted py-2"
          >
            <p class="mb-0 p-0">
              Gallon {{ product.volume }} - R$ {{ product.price_un }}
            </p>
            <p class="mb-0 p-0">
              Quantity: {{ product.qtd_total }}
            </p>
            <p class="mb-0 p-0">
              Total: R$ {{ parseFloat(product.price) }}
            </p>
          </div>
        </div>
      </div>
      <b-button
        class="mt-3 btn-sm text-light border border-transparent shadow"
        variant="dark"
        @click="collectingInfo = true && currentWallId--"
      >
        Back
      </b-button>
    </CustomCard>
  </b-container>
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
import Validating from '../functions/Validating'
import AreaByWall from '../functions/AreaByWall'

export default {
  name: 'Paiting',
  data () {
    return {
      quantityWalls: 4,
      currentWallId: 1,
      collectingInfo: true
    }
  },
  computed: {
    ...mapGetters({
      walls: 'walls/walls',
      currentWall: 'walls/wall',
      areaWalls: 'walls/getAreaFromWalls',
      gallons: 'gallons/getFetchedGallons'
    })
  },
  watch: {
    gallons: {
      handler (update) {
        this.collectingInfo = false
      }
    }
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
        } else {
          this.fetchGallons({ myRoomArea: this.areaWalls })
        }
      } else {
        alerts.map(alert => this.notify(alert.message))
      }
    },
    notify (message) {
      return this.$bvToast.toast(message, {
        title: 'Check the inputs...',
        solid: false,
        autoHideDelay: 3000,
        variant: 'danger'
      })
    },
    getAreaByWall (wall) {
      return AreaByWall.areaByWall(wall)
    }
  }
}
</script>
<style scoped>
  .progress-bar-orange {
    background-color: #f4901d;
  }
  .bar-gray {
    background-color: #d5d5d5;
  }
</style>
