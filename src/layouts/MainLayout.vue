<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-avatar class="q-mr-md">
          <img src="statics/horse.svg" />
        </q-avatar>
        Equistro
        <q-btn
          flat
          round
          icon="menu"
          @click="right = !right"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" behavior="mobile" elevated>
      <q-list>
        <q-item-label class="row menu-header items-center">
          <span>Menu</span>
          <q-space />
          <q-btn
            flat
            round
            icon="close"
            @click="right = !right"
            class="right"
          />
        </q-item-label>
        <q-separator />
        <NavBar v-for="(nav, index) in navs" :key="index" :nav="nav" />
        <q-btn flat @click="logoutUser">
          Wyloguj mnie
        </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <div class="z-max fixed-bottom text-center q-mb-xl addButton">
      <q-btn
        elevated
        round
        color="primary"
        size="20px"
        icon="add"
        @click="showAddTask = true"
      />
    </div> -->

    <q-footer reveal elevated class="app-footer">
      <q-toolbar class="q-px-lg justify-between">
        <q-btn flat round icon="home" :to="{ name: 'Test' }" />
        <q-btn
          flat
          round
          icon="calendar_today"
          :to="{ name: 'ActivitiesList' }"
        />
        <q-btn round @click="showAddTask = true" icon="add" />
        <q-btn flat round icon="pets" :to="{ name: 'HorsesList' }" />
        <q-btn
          flat
          round
          icon="supervisor_account"
          :to="{ name: 'UsersList' }"
        />
      </q-toolbar>
    </q-footer>
    <q-dialog v-model="showAddTask">
      <AddActivity @close="showAddTask = false" />
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavBar from '../components/NavBar.vue';
import AddActivity from 'src/components/Activities/AddActivity.vue';

export default {
  name: 'MainLayout',
  components: {
    NavBar,
    AddActivity,
  },
  data() {
    return {
      showAddTask: false,
      right: false,
      horseLogo: 'src/statics/horse-logo.png',
      navs: [
        {
          name: 'Moje konto',
          icon: 'supervisor_account',
          page: 'account',
          accessRole: 'all',
        },
        {
          name: 'Dodaj konia',
          icon: 'add',
          page: 'AddHorse',
          accessRole: 'admin',
        },
      ],
    };
  },
  computed: {
    ...mapState('auth', {
      loggedIn: 'loggedIn',
    }),
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
  },
};
</script>
<style lang="scss">
.menu-header {
  font-size: 24px;
  font-weight: 700;
  color: rgb(55, 71, 79);
  padding: 5px 10px 5px 18px;
  margin-bottom: 10px;
}
.app-header {
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 700;
  color: rgb(55, 71, 79);
  padding: 5px 10px 5px 10px;
}
.app-footer {
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 700;
  color: rgb(55, 71, 79);
  padding: 4px 10px 4px 10px;
}
</style>
