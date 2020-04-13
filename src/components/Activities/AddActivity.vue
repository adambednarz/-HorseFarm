<template>
  <q-card>
    <form @submit.prevent="onSubmit">
      <modal-header>Dodaj aktywność</modal-header>
      <modal-select-horse
        ref="modalHorse"
        :horseOptions.sync="activity.horseId"
      />

      <modal-select-activity-type
        ref="modalOption"
        :typeOptions.sync="activity.type"
      />
      <modal-due-date :dueDate.sync="activity.dueDate" />

      <modal-due-time
        v-if="activity.dueDate"
        :dueTime.sync="activity.dueTime"
      />

      <q-card-actions>
        <q-btn
          type="submit"
          class="submit-button"
          label="Zapisz"
          color="primary"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { date } from 'quasar';
import { mapActions } from 'vuex';
import ModalHeader from 'src/components/Shared/ModalHeader';
import ModalName from 'src/components/Shared/ModalName';
import ModalDueDate from 'src/components/Shared/ModalDueDate';
import ModalDueTime from 'src/components/Shared/ModalDueTime';
import ModalSelectActivityType from 'src/components/Shared/ModalSelectActivityType';
import ModalSelectHorse from 'src/components/Shared/ModalSelectHorse';

export default {
  components: {
    ModalHeader,
    ModalSelectHorse,
    ModalDueDate,
    ModalDueTime,
    ModalSelectActivityType,
  },
  data() {
    return {
      activity: {
        type: '',
        horseId: '',
        dueDate: '',
        dueTime: '',
      },
    };
  },
  methods: {
    ...mapActions('activities', ['addActivity']),
    onSubmit() {
      this.$refs.modalOption.$refs.type.validate();
      this.$refs.modalHorse.$refs.horse.validate();
      if (
        !this.$refs.modalOption.$refs.type.hasError &&
        !this.$refs.modalHorse.$refs.horse.hasError
      ) {
        this.submitActivity();
      }
    },
    submitActivity() {
      this.addActivity(this.activity);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped></style>
