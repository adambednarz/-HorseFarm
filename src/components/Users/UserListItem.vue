<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar class="avatar-size">
          <img :src="user.imgSrc" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="list-item-title"
          >{{ user.firstName }} {{ user.secondName }}
          <span class="list-item-subtitle" v-if="user.nick"
            >({{ user.nick }})</span
          >
        </q-item-label>
        <q-item-label v-if="user.rank" class="list-item-subtitle">
          <q-icon class="q-pb-xs" name="bookmark_border" />
          {{ user.rank }}
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          v-if="user.active"
          dense
          flat
          round
          icon="lens"
          size="8.5px"
          color="green"
        />
        <span v-else>{{ user.lastLogin }}</span>
      </q-item-section>
    </q-item>
    <!-- <q-separator spaced /> -->
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
