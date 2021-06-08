<template>
  <div id="nav">
    <h1>Me suivre en stream</h1>
    <button class="btn">x</button>
  </div>
  <router-view />
</template>
<style scoped lang="scss">
#nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

button {
  width: 50px;
  height: 50px;
}
</style>
<style lang="scss">
@import "./styles/fonts";
@import "./styles/theme";
@import "./styles/button";
@import "./styles/animations";
*,
*:after,
*:before {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  height: 100%;
}

body {
  padding: 0.5em;
}
#app {
  font-family: "Sarabun";
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
