<template>
  <div id="container">
    <b-container class="w-30">
      <CustomCard class="d-flex mt-4 w-50">
        <h5><strong class="ml-auto">Painting the room</strong></h5>
        <b-card-text>
          Instantly get the amount of ink needed to paint your room
        </b-card-text>
        <NavButton to="painting" title="Go" />
      </CustomCard>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
