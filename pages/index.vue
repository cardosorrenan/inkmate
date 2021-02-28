<template>
  <div id="container">
    <b-container class="mt-5">
      <b-row class="mx-5 w-100">
        <b-col md="4" sm="12">
          <b-card
            title="Painting the room"
            tag="article"
            class="mb-2 pt-0"
          >
            <b-card-text>
              Instantly get the amount of ink needed to paint your room
            </b-card-text>
            <NavButton to="/painting" title="Go" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
