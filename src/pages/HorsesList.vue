<template>
  <div>
    <p>Horse site</p>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list v-for="(horse, index) in horses" :key="index" bordered padding>
        <horse-list-item :horse="horse" />
      </q-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HorseListItem from 'src/components/Horses/HorseListItem.vue';
import horses from '../store/modules/horses';

export default {
  components: {
    HorseListItem,
  },
  computed: {
    ...mapGetters('horses', {
      horses: 'getAllHorses',
    }),
  },
  methods: {
    ...mapActions('horses', [
      'testA',
      'addHorse',
      'updateHorse',
      'deleteHorse',
    ]),
    onSubmit() {
      this.testA();
    },
  },
};
</script>

<style lang="scss" scoped></style>
