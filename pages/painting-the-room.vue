<template>
  <div class="container">
    <b-container class="d-flex align-items-center">
      <b-card class="d-flex bd-highlight shadow p-3 bg-white rounded pt-0 w-30">
        <b-card-body>
          <p class="text-muted pr-auto">room walls</p>
          <b-progress :max="4" class="mt-0 pt-0 mb-5" show-progress animated>
            <hr class="border border-primary" />
            <b-progress-bar :value="1">
              <span class=""><strong>1 / 4</strong></span>
            </b-progress-bar>
          </b-progress>
          <Input dimension-wall="Width" :value="wall.length" />
          <Input dimension-wall="Height" :value="wall.height" />
          <b-button variant="outline-primary">
            Avançar
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
      wall: {
        length: 1,
        height: 1,
        numDoors: 0,
        numWindows: 0
      }
    }
  },
  computed: {
    array_walls () {
      return [...Array(this.quantity_walls).keys()]
    }
  }
}
</script>
