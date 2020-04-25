<template>
  <q-item clickable v-ripple class="item">
    <q-item-section avatar class="q-pl-sm">
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
    <q-item-section side class="q-mr-sm">
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
