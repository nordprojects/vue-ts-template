<template>
  <div id="app">
    <PhoneFrame360720 bgColor="white" >
      <HelloWorld msg="Hello, world!" />
      <FullscreenButton class="fullscreen-button" />
    </PhoneFrame360720>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import PhoneFrame360720 from './components/PhoneFrame360720.vue';
import FullscreenButton from './components/FullscreenButton.vue';

export default Vue.extend({
  name: 'app',
  data() {
    return {}
  },
  methods: {
  },
  components: {
    HelloWorld,
    PhoneFrame360720,
    FullscreenButton,
  }
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>

<style scoped>
.fullscreen-button {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, 0);
}
</style>
