<template>
  <q-item clickable v-ripple class="item">
    <q-item-section avatar class="q-pl-sm">
      <q-avatar v-if="horse.photoUrl" rounded class="avatar-size">
        <img :src="horse.photoUrl" />
      </q-avatar>
      <q-avatar
        v-else
        color="primary"
        text-color="white"
        rounded
        font-size="40px"
        class="avatar-size "
      >
        {{ horse.name.charAt(0) }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="list-item-title">{{ horse.name }}</q-item-label>
      <q-item-label class="list-item-subtitle">
        <q-icon class="q-pb-xs" name="place" /> {{ horse.box }}</q-item-label
      >
    </q-item-section>

    <q-item-section side top class="q-mt-sm q-mr-sm">
      <div>
        <q-rating
          v-model="ratingModel"
          :max="3"
          size="14px"
          color="orange"
          icon="lens"
          readonly
        />
      </div>
      <!-- <q-icon size="20px" name="info" color="green" /> -->
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    horse: {
      type: Object,
    },
  },
  data() {
    return {
      ratingModel: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.04) 0px 1px 5px 0px;
  height: 82px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 6px;
  margin: 0px 10px 12px;
  padding: 0px;
  overflow: hidden;
  text-decoration: none;
  // min-height: 86px;
  // padding: 8px 16px 8px 0px;
}
</style>
