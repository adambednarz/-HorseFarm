<template>
  <q-page padding>
    <p class="slogan">Dodaj nowego konia!</p>

    <form @submit.prevent="onSubmit" class="form-container">
      <div class="row q-mb-sm">
        <q-input
          ref="name"
          outlined
          class="col"
          v-model="newHorse.name"
          label="Nazwa"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Pole nie może zostać puste',
          ]"
        />
      </div>
      <div class="row q-mb-lg">
        <q-input outlined class="col" v-model="newHorse.box" label="Boks" />
      </div>
      <div class="row q-mb-lg">
        <q-input outlined class="col" v-model="newHorse.breed" label="Rasa" />
      </div>
      <div class="row q-mb-lg">
        <q-input
          outlined
          class="col"
          v-model="newHorse.birthDate"
          label="Data narodzin"
        />
      </div>
      <div class="row q-mb-sm">
        <q-input
          ref="owner"
          outlined
          class="col"
          v-model="newHorse.owner"
          label="Właściciel"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Pole nie może zostać puste',
          ]"
        />
      </div>
      <div class="row q-mb-sm">
        <q-input
          ref="attendant"
          outlined
          class="col"
          v-model="newHorse.attendant"
          label="Opiekun"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Pole nie może zostać puste',
          ]"
        />
      </div>
      <div class="row q-mb-lg">
        <q-input
          outlined
          class="col"
          v-model="newHorse.photoUrl"
          label="Link zdjęcia (z fb)"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          class="col"
          type="textarea"
          outlined
          v-model="newHorse.description"
          label="Opis (np. spokojny, odważny w terenie)"
        />
      </div>
      <div class="row q-mb-lg">
        <q-btn color="primary" type="submit" class="submit-button"
          >Dodaj konia</q-btn
        >
      </div>
    </form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newHorse: {
        name: null,
        box: null,
        breed: null,
        birthDate: null,
        owner: null,
        attendant: null,
        description: null,
        photoUrl: null,
      },
    };
  },
  methods: {
    ...mapActions('horses', ['addHorse']),
    onSubmit() {
      this.$refs.name.validate();
      this.$refs.owner.validate();
      this.$refs.attendant.validate();
      if (
        !this.$refs.name.hasError &&
        !this.$refs.owner.hasError &&
        !this.$refs.attendant.hasError
      ) {
        this.addHorse(this.newHorse);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slogan {
  margin: 20px auto 20px auto;
  color: rgb(55, 71, 79);
  font-size: 34px;
  text-align: center;
  line-height: 1.167;
}
.form-container {
  margin: 10px 16px 20px 16px;
}
</style>
