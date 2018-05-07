/* add your js here */

import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    active: false,
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
});
