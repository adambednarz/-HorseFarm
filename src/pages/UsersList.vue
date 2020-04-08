<template>
  <div class="q-pa-md">
    <q-list v-for="(user, index) in users" :key="index">
      <user-list-item :user="user" />
    </q-list>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import UserListItem from 'src/components/Users/UserListItem.vue';

export default {
  components: {
    UserListItem,
  },
  data() {
    return {
      newUser: {
        firstName: 'Adam',
        secondName: 'Bednarz',
        lastLogin: '20/02/2020',
        active: true,
      },
    };
  },
  computed: {
    ...mapGetters('users', {
      users: 'getAllUsers',
    }),
  },
  methods: {
    ...mapActions('users', ['testA', 'addUser', 'updateUser', 'deleteUser']),

    onSubmit() {
      this.addUser(this.newUser);
    },
  },
};
</script>

<style lang="scss" scoped></style>
