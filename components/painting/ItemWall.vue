<template>
  <div class="d-flex justify-content-center justify-content-between w-80 mb-4">
    <div>
      <p style="font-size: 10pt" class="text-muted p-0 m-0 mb-2">
        Doors
      </p>
      <b-form-spinbutton id="sb-small" v-model="numDoors" size="sm" min="0" max="100" />
    </div>
    <div>
      <p style="font-size: 10pt" class="text-muted p-0 m-0 mb-2">
        Windows
      </p>
      <b-form-spinbutton id="sb-small" v-model="numWindows" size="sm" min="0" max="100" />
    </div>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      value: 0
    }
  },
  computed: {
    ...mapGetters({
      currentWall: 'walls/wall'
    }),
    numDoors: {
      get () {
        return this.currentWall.numDoors
      },
      set (value) {
        this.updateWallByProperty({ property: 'numDoors', value })
      }
    },
    numWindows: {
      get () {
        return this.currentWall.numWindows
      },
      set (value) {
        this.updateWallByProperty({ property: 'numWindows', value })
      }
    }
  },
  methods: {
    ...mapMutations({
      updateWallByProperty: 'walls/updateWallByProperty'
    })
  }
}
</script>
