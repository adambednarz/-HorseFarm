<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['handleAuthStateChange']),
  },
  mounted() {
    this.handleAuthStateChange();
  },
};
</script>
<style lang="scss">
// .list-item-header {
//   font-size: 24px;
//   font-weight: 500;
// }
</style>
