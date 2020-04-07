<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Horse Farm App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Menu
        </q-item-label>
        <NavBar v-for="(nav, index) in navs" :key="index" :nav="nav" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'MainLayout',
  components: {
    NavBar,
  },

  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          name: 'Users',
          icon: 'supervisor_account',
          page: 'UsersList',
        },
        {
          name: 'Horses',
          icon: 'supervisor_account',
          page: 'HorsesList',
        },
        {
          name: 'Activities',
          icon: 'list',
          page: 'ActivitiesList',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
}
</style>
