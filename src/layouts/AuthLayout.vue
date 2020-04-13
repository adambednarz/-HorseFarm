<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-avatar class="q-mr-md">
          <img src="statics/horse.svg" />
        </q-avatar>
        Equistro
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.app-header {
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 700;
  color: rgb(55, 71, 79);
  padding: 5px 0px 5px 18px;
}
</style>
