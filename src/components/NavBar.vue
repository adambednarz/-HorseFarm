<template>
  <q-item clickable exact :to="{ name: nav.page }">
    <q-item-section avatar>
      <q-icon :name="nav.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ nav.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
