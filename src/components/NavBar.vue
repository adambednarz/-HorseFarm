<template>
  <div>
    <div v-if="nav.accessRole == 'all'">
      <q-item clickable exact :to="{ name: nav.page }">
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="list-item-subtitle">{{ nav.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div v-if="nav.accessRole == getLoggedUserRole(userId)">
      <q-item clickable exact :to="{ name: nav.page }">
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="list-item-subtitle">{{ nav.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { firebaseAuth } from 'src/boot/firebase';

export default {
  props: {
    nav: {
      type: Object,
    },
  },
  data() {
    return {
      userId: '',
    };
  },
  created() {
    this.userId = firebaseAuth.currentUser.uid;
  },
  computed: {
    ...mapGetters('users', {
      getLoggedUserRole: 'getLoggedUserRole',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
