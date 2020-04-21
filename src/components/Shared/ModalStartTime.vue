<template>
  <q-card-section class="q-pa-none">
    <q-input
      outlined
      :label="label"
      :value="dueTime"
      :rules="[val => !!val || '* Wymagane', 'time']"
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
export default {
  props: {
    dueTime: {},
    label: {},
  },
};
</script>

<style lang="scss" scoped>
</style>
