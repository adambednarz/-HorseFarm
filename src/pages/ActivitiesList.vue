<template>
  <div class="q-pa-sm">
    <q-infinite-scroll @load="onLoad" :offset="500" ref="myRef">
      <div v-for="(item, index) in items" :key="index" class="caption">
        <!-- <activities-list-item :activity="item" /> -->

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit odit fugit quos, a, reiciendis saepe repellendus cumque
          voluptate laudantium illo praesentium expedita ipsum voluptas
          voluptatum at doloribus repudiandae nisi! Id, omnis modi libero fuga
          doloremque accusantium placeat quas unde. Eveniet ad, velit cum
          provident reprehenderit soluta et officiis? Velit ducimus atque
          molestiae repellat minima qui officiis, quos placeat! Minus hic nemo
          pariatur mollitia soluta odit, laboriosam minima veniam dolores
          corporis officiis! Voluptate itaque architecto similique voluptatibus
          quo voluptas beatae delectus doloremque, repellendus provident eos
          asperiores, nihil minima enim expedita consectetur. Minus veniam rerum
          asperiores, doloribus dolores a consequuntur eos ducimus. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Aut deleniti at quos?
          Veritatis animi molestiae ipsum iusto dolorum sapiente sed debitis
          rerum voluptatum autem, voluptatem quod iste praesentium dignissimos
          soluta adipisci et, quas architecto. Deleniti porro maxime nesciunt
          dolores ad! Nobis, alias! Alias sit quibusdam molestias laboriosam
          quia dicta corrupti?
        </p>
        <pre>
          {{ index }}
          {{ item[0] }}
          {{ item[1] }}
          </pre
        >
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script>
import activityService from 'src/servies/activityService.js';
export default {
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
          const obj = await activityService.getScrollList(key);
          if (obj) {
            const result = Object.keys(obj).map(function(key) {
              return [key, obj[key]];
            });
            this.lastItemKey = key;
            setTimeout(() => {
              this.items.push(...result.reverse());
              done();
            }, 3000);
          }
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
