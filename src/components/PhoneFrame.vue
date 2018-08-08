<template>
  <div class="frame-container">
    <div class="frame-contents" :style="{background: bgColor}">
      <slot></slot>
    </div>
    <div class="frame-image"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PhoneFrame',
  props: ['bgColor'],
});
</script>

<style scoped>
  .frame-container {
    background-color: #464e5d;
    /* background-image: radial-gradient(circle farthest-corner at 13% 100%, #555e70 0%, #464e5d 100%); */
    overflow: hidden;
  }
  .frame-image {
    position: absolute;
    width: 548px;
    height: 1023px;
    left: calc(50% - 274px);
    top: calc(50% - 501px);
    background-image: url(../assets/phone-frame.png);
    background-size: 548px auto;
    background-repeat: no-repeat;
    background-position: center;

    pointer-events: none;
  }
  .frame-contents {
    position: absolute;
    width: 412px;
    height: 730px;
    left: calc(50% - 206px);
    top: calc(50% - 365px);

    overflow: hidden;
  }

  @media only screen and (max-width : 480px) {
    .frame-image {
      display: none;
    }
    .frame-contents {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

  }

</style>
