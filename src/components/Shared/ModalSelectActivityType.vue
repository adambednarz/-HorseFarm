<template>
  <q-card-section class="q-pt-none">
    <q-select
      ref="type"
      label="Typ"
      transition-show="scale"
      transition-hide="scale"
      outlined
      @input="$emit('update:typeOptions', $event)"
      :value="typeOptions"
      :options="options"
      :rules="[val => (val && val.length > 0) || 'Pole nie może byś puste']"
    />
  </q-card-section>
</template>

<script>
export default {
  props: {
    typeOptions: {},
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
};
</script>

<style lang="scss" scoped></style>
