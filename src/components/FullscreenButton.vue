<template>
  <div class="fullscreen-button"
       v-if="this.showFullscreenButton"
       @click="fullscreen()">
    Fullscreen
  </div>
</template>

<script>

export default {
  name: 'FullscreenButton',
  data: function() {
    return {
      showFullscreenButton: !document.webkitIsFullScreen,
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener('webkitfullscreenchange', this.fullscreenDidChange);
    });
  },
  methods: {
    fullscreen: function () {
      window.document.documentElement.webkitRequestFullScreen();
    },
    fullscreenDidChange: function () {
      this.showFullscreenButton = !document.webkitIsFullScreen;
    }
  }
}
</script>

<style scoped>
.fullscreen-button {
  display: none;
}

@media only screen and (max-width : 480px) {
  .fullscreen-button {
    display: inline-block;
    font-family: 'Roboto Mono';
    font-weight: 300;
    font-size: 14px;
    color: #333333;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    line-height: 24px;
    /* width: 110px; */
    border-radius: 12px;
    opacity: 0.5;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
