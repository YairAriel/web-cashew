<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import 'node_modules/bulma/bulma'
@import 'node_modules/bulma-extensions/bulma-calendar/calendar'
@import 'node_modules/bulma-extensions/bulma-divider/divider'
@import 'node_modules/bulma-slider/slider'
</style>


<style>
  @import url('../node_modules/font-awesome/css/font-awesome.css');
  @keyframes pull-up-first {
    0% {
    }
    50%{
      transform: rotateX(70deg) translateY(-3rem);
    }
    100%{
    }
  }
  @keyframes pull-up {
    0% {
    }
    50%{
      transform: translateY(-3rem);
    }
    100%{
    }
  }
  @keyframes pull-down {
    0% {
    }
    50%{
      transform: translateY(3rem);
    }
    100%{
    }
  }
  @keyframes pull-down-last {
    0% {
    }
    50%{
      transform: rotateX(-70deg) translateY(3rem);
    }
    100%{
    }
  }
  @keyframes scroll {
    0%{

    }
    25%{
      transform: translateY(-2rem);
      opacity: 0.5;
    }
    50%{
      opacity: 0;
    }
    75%{
      transform: translateY(2rem);
      opacity: 0.5;
    }
    100%{
    }
  }
    @keyframes scroll-down {
    0%{

    }
    25%{
      transform: translateY(2rem);
      opacity: 0.5;
    }
    50%{
      opacity: 0;
    }
    75%{
      transform: translateY(-2rem);
      opacity: 0.5;
    }
    100%{
    }
  }
  body, html, #app{
    overflow: hidden;
    position: relative;
    max-height: 100%;
    height: 100%;
  }
</style>
