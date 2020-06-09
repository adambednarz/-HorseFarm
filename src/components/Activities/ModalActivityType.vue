<template>
  <div class="typeSign" :style="{ background: color(activityType) }"></div>
</template>

<script>
export default {
  props: ['activityType'],
  methods: {
    color(actType) {
      switch (actType) {
        case 'Trening':
          return 'rgb(66, 153, 225)';
          break;
        case 'Jazda w terenie':
          return 'rgb(72, 187, 120)';
          break;
        case 'Rekreacja':
          return 'rgb(212, 104, 222)';
          break;
        case 'Lonżowanie':
          return 'rgb(255, 183, 77)';
          break;
        case 'Padok':
          // return 'rgb(159, 122, 234)';
          return 'rgb(82, 102, 225)';
          break;
        case 'Karuzela':
          return 'rgb(245, 101, 101)';
          break;
        default:
          return 'rgb(255, 255, 255)';
      }
    },
  },
};

// methods: {
//   bacgroundColor() {
//     swi
//         'Trening',
//         '',
//         '',
//         '',
//         'Padok',
//         'Karuzela',

//   }
// },
</script>

<style lang="scss" scoped>
.typeSign {
  flex-basis: 5px;
  flex-shrink: 0;
  background: rgb(47, 207, 187);
}
</style>
