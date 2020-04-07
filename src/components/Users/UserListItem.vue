<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section
        >{{ user.firstName }} {{ user.secondName }}</q-item-section
      >
    </q-item>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
