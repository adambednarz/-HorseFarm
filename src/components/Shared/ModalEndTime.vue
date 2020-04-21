<template>
  <q-card-section class="q-pa-none">
    <q-input
      outlined
      :label="label"
      :value="dueTime"
      :rules="[
        val => !!val || '* Wymagane',
        'time',
        val => timeValidation(val) || 'Niepoprawna godzina',
      ]"
      @input="$emit('update:dueTime', $event)"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              format24h
              now-btn
              :value="dueTime"
              @input="$emit('update:dueTime', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-card-section>
</template>

<script>
import { moment } from 'src/plugins/moment.js';

export default {
  props: {
    dueTime: {},
    startTime: {},
    label: {},
  },
  methods: {
    timeValidation(endTime) {
      return moment('2000-01-01 ' + endTime).isAfter(
        '2000-01-01 ' + this.startTime,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
