<template>
  <div class="container">
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
            <NavButton to="/painting-the-room" title="Go" />
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

<style>
.container {
  margin: 0;
  min-height: 93vh; /* 88% Container, 7% Header, 5% Padding Top */
  min-width: 100vw;
  display: flex;
  background-color: #FAACA8;
  background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
</style>
