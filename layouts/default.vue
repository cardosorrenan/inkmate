<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#container {
  margin: 0;
  min-height: 93vh; /* 88% Container, 7% Header, 5% Padding Top */
  max-width: 100vw;
  display: flex;
  background-color: #1b1b1b;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

</style>
