<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar class="avatar-size">
          <img v-if="user.photoUrl" :src="user.photoUrl" />
          <img v-else src="statics/user.svg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="list-item-title"
          >{{ user.displayName }}
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
          v-if="user.status == 'active'"
          dense
          flat
          round
          icon="lens"
          size="8.5px"
          color="green"
        />
        <span v-else>{{ lastActive(user.status) }}</span>
      </q-item-section>
    </q-item>
    <!-- <q-separator spaced /> -->
  </div>
</template>

<script>
import { moment } from 'src/plugins/moment.js';

export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    lastActive(timeSpan) {
      return moment(timeSpan).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped></style>
