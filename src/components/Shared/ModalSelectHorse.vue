<template>
  <q-card-section class="q-pt-none">
    <q-select
      ref="horse"
      label="Koń"
      transition-show="scale"
      transition-hide="scale"
      outlined
      @input="$emit('update:horseOptions', $event)"
      :value="horseOptions"
      :options="getIdAndNameHorses"
      option-value="id"
      option-label="name"
      emit-value
      map-options
      :rules="[val => (val && val.length > 0) || 'Pole nie może byś puste']"
    />
  </q-card-section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    horseOptions: {},
  },
  data() {
    return {
      model: null,
      options: [
        'Trening',
        'Jazda w terenie',
        'Rekreacja',
        'Lonżowanie',
        'Padok',
        'Karuzela',
      ],
    };
  },
  computed: {
    ...mapGetters('horses', {
      getIdAndNameHorses: 'getIdAndNameHorses',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
