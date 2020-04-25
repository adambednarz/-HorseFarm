<template>
  <q-page padding>
    <q-list v-for="(user, index) in users" :key="index">
      <user-list-item :user="user" />
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import UserListItem from 'src/components/Users/UserListItem.vue';

export default {
  components: {
    UserListItem,
  },

  computed: {
    ...mapGetters('users', {
      users: 'getAllUsers',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
