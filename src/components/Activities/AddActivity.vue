<template>
  <div>
    <q-stepper v-model="step" ref="stepper" contracted color="primary" animated>
      <q-step
        class="stepSize"
        :name="1"
        title="Koń i rodzaj aktywności"
        icon="add"
        :done="step > 1"
      >
        <modal-select-horse :horseOptions.sync="activity.horseId" />

        <modal-select-activity-type :typeOptions.sync="activity.type" />
      </q-step>

      <q-step
        class="stepSize"
        :name="2"
        title="Czas"
        icon="event"
        :done="step > 2"
      >
        <modal-due-date :dueDate.sync="activity.date" />
        <div class="row justify-between">
          <modal-start-time
            label="od godz"
            :dueTime.sync="activity.startAt"
            class="double"
          />
          <modal-end-time
            label="do godz"
            :dueTime.sync="activity.endAt"
            :startTime="activity.startAt"
            class="double"
          />
        </div>
      </q-step>

      <q-step title="Opis" class="stepSize" :name="3" icon="add_comment">
        <div>
          <q-input
            v-model="activity.description"
            clearable
            outlined
            type="textarea"
            label="Opis (opcjonalnie)"
          />
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="row">
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Wróć"
            class="q-ml-sm"
          />
          <q-btn
            v-if="step === 1"
            :disable="firstButtonActivation"
            class="q-ml-auto"
            @click="$refs.stepper.next()"
            color="primary"
            label="Dalej"
          />
          <q-btn
            v-if="step === 2"
            :disable="secondButtonActivation"
            class="q-ml-auto"
            @click="$refs.stepper.next()"
            color="primary"
            label="Dalej"
          />
          <q-btn
            v-if="step === 3"
            class="q-ml-auto"
            @click="onSubmit"
            color="primary"
            label="Zapisz"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import Vue from 'vue';
import { date } from 'quasar';
import { mapActions } from 'vuex';
import timeService from '../../servies/timeService';
import ModalName from 'src/components/Shared/ModalName';
import ModalDueDate from 'src/components/Shared/ModalDueDate';
import ModalStartTime from 'src/components/Shared/ModalStartTime';
import ModalEndTime from 'src/components/Shared/ModalEndTime';
import ModalSelectActivityType from 'src/components/Shared/ModalSelectActivityType';
import ModalSelectHorse from 'src/components/Shared/ModalSelectHorse';

export default {
  components: {
    ModalSelectHorse,
    ModalDueDate,
    ModalStartTime,
    ModalEndTime,
    ModalSelectActivityType,
  },
  data() {
    return {
      step: 1,
      activity: {
        type: '',
        horseId: '',
        date: timeService.getTodayDate(),
        startAt: '',
        endAt: '',
        description: null,
      },
    };
  },
  computed: {
    firstButtonActivation() {
      if (this.activity.horseId === '' || this.activity.type === '') {
        return true;
      } else {
        return false;
      }
    },
    secondButtonActivation() {
      if (this.activity.startAt === '' || this.activity.endAt === '') {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions('activities', ['addActivity']),
    onSubmit() {
      this.submitActivity();
    },
    submitActivity() {
      this.addActivity(this.activity);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.double {
  width: 45%;
}
.stepSize {
  width: 300px;
  height: 200px;
  // max-width: 260px;
}
</style>
