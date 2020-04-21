<template>
  <q-card-section class="q-pa-none">
    <q-input
      ref="name"
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Nazwa"
      lazy-rules
      autofocus
      clearable
      :rules="[val => (val && val.length > 0) || 'Pole nie może byś puste']"
    />
  </q-card-section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
