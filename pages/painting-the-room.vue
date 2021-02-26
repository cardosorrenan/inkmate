<template>
  <div class="container bg-danger">
    <b-container>
      <b-card>
        <div class="mr-auto mb-2">
          <NavButton to="/" title="Back" />
        </div>
        <b-card-text>
          Parede 1 de 4
        </b-card-text>
        <Input />
        <Input />
        <b-button variant="outline-primary">
          Avançar
        </b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'GetQuantityInk'
}
</script>
