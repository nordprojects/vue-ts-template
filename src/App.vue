<template>
  <div id="app">
    <PhoneFrame360>
      <HelloWorld msg="Hello, world!"/>
    </PhoneFrame360>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import PhoneFrame360 from './components/PhoneFrame360.vue';

export default Vue.extend({
  name: 'app',
  data() {
    return {}
  },
  methods: {
  },
  components: {
    HelloWorld,
    PhoneFrame360,
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
