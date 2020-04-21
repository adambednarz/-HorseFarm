<template>
  <q-card-section class="q-pa-none">
    <q-input
      clearable
      outlined
      label="Data"
      :value="dueDate"
      lazy-rules
      :rules="[val => dateValidation(val) || 'Niepoprawny format']"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date
              :value="dueDate"
              :options="optionsFn"
              mask="DD/MM/YYYY"
              today-btn
              @input="$emit('update:dueDate', $event)"
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
    dueDate: {},
  },
  methods: {
    dateValidation(date) {
      const re = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
      return re.test(date);
    },
    optionsFn(date) {
      let startTime = moment()
        .subtract(7, 'days')
        .format('YYYY/MM/DD');
      let today = moment().format('YYYY/MM/DD');

      return date >= startTime && date <= today;
    },
  },
};
</script>

<style lang="scss" scoped></style>
