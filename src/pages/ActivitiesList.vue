<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad" :offset="500" ref="myRef">
      <div v-for="(item, index) in items" :key="index" class="caption">
        <activities-list-item :activity="item" />
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import activityService from 'src/servies/activityService.js';
import ActivitiesListItem from 'src/components/Activities/ActivitiesListItem';
export default {
  components: {
    ActivitiesListItem,
  },
  data() {
    return {
      lastItemKey: '',
      items: [],
    };
  },

  methods: {
    async onLoad(index, done) {
      if (this.items.length > 0) {
        console.log('jestem w if');

        const lastObj = this.items.pop();
        const key = lastObj[0];
        if (key !== this.lastItemKey) {
          this.lastItemKey = key;
          const obj = await activityService.getScrollList(key);

          const result = Object.keys(obj).map(function(key) {
            return [key, obj[key]];
          });

          setTimeout(() => {
            this.items.push(...result.reverse());
            done();
          }, 1000);
        } else {
          this.items.push(lastObj);

          this.$refs.myRef.stop();
        }
      } else {
        console.log('jestem w else');
        let obj = await activityService.getInitialList();
        if (obj) {
          let result = Object.keys(obj).map(function(key) {
            return [key, obj[key]];
          });

          this.items = result.reverse();
        }
        done();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
