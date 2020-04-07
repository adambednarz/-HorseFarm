<template>
  <div>
    <q-item dense>
      <q-item-section top avatar>
        <q-avatar rounded>
          <img
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000131/1580198294000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ horse.name }}</q-item-label>
        <q-item-label caption>Rasa: {{ horse.breed }}</q-item-label>
        <q-item-label caption>Boks: {{ horse.box }}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>Aktywność: duża</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: {
    horse: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
