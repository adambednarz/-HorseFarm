<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section top avatar>
        <q-avatar v-if="activity.photoUrl" rounded class="avatar-size">
          <img :src="activity.photoUrl" />
        </q-avatar>
        <q-avatar
          v-else
          color="primary"
          text-color="white"
          rounded
          font-size="40px"
          class="avatar-size "
        >
          {{ activity.name.charAt(0) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="list-item-title">{{ activity.Type }}</q-item-label>
        <q-item-label class="list-item-subtitle">
          <q-icon class="q-pb-xs" name="place" />
          {{ activity.hId }}</q-item-label
        >
      </q-item-section>

      <q-item-section side top>
        <div>
          <q-rating
            v-model="ratingModel"
            :max="3"
            size="xs"
            color="orange"
            icon="lens"
            readonly
          />
        </div>
        <!-- <q-icon size="20px" name="info" color="green" /> -->
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
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

<style lang="scss" scoped></style>
