import Vue from 'vue';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    firebase?: any,
  }
}

/*
  Allow any property access on Vue instances.
  VueFire adds properties that Typescript doesnt understand.
  To work around this, add a rule that all keys return 'any' type.
*/
declare module 'vue/types/vue' {
  interface Vue {
    [key: string]: any
  }
}
