<template>
  <div>
    <q-item clickable v-ripple class="item">
      <modal-activity-type :activityType="activity[1].type" />
      <q-item-section avatar class="q-pl-sm">
        <q-avatar
          v-if="getById(activity[1].hId).photoUrl"
          rounded
          class="avatar-size"
        >
          <img :src="getById(activity[1].hId).photoUrl" />
        </q-avatar>
        <q-avatar
          v-else
          color="primary"
          text-color="white"
          rounded
          font-size="40px"
          class="avatar-size "
        >
          {{ getById(activity[1].hId).name.charAt(0) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="list-item-title">{{
          getById(activity[1].hId).name
        }}</q-item-label>
        <q-item-label class="list-item-subtitle">
          {{ activity[1].type }}</q-item-label
        >
        <q-chip dense class="q-mr-auto">
          <q-avatar>
            <img
              v-if="getUserById(activity[1].uId).photoUrl"
              :src="getUserById(activity[1].uId).photoUrl"
            />

            <img v-else src="statics/user.svg" />
          </q-avatar>
          {{ getUserById(activity[1].uId).displayName }}
        </q-chip>
      </q-item-section>

      <q-item-section top side class="q-mr-sm q-mt-sm">
        <span>{{ lastActive(activity[1].end) }}</span>
        <div class="row">
          <q-icon class="q-pt-xs q-mr-xs " name="schedule" />
          <span>{{ convertTime(activity[1].last) }}</span>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { moment } from 'src/plugins/moment.js';
import ModalActivityType from 'src/components/Activities/ModalActivityType';

export default {
  props: {
    activity: {
      type: Array,
    },
  },
  components: {
    ModalActivityType,
  },
  data() {
    return {
      ratingModel: 2,
    };
  },
  computed: {
    ...mapGetters('horses', {
      getById: 'getById',
    }),
    ...mapGetters('users', {
      getUserById: 'getById',
    }),
  },
  methods: {
    lastActive(timeSpan) {
      return moment.unix(timeSpan).fromNow();
    },
    convertTime(minutes) {
      return moment()
        .startOf('day')
        .add(minutes, 'minutes')
        .format('H:mm');
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
.db {
  display: flexbox;
}
</style>
