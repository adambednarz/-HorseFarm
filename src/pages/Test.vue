<template>
  <div>
    <h4>Strona do testowania</h4>
    {{ time }}
    <pre>{{ user }}</pre>
    <!-- <pre>{{ getInitialList }}</pre> -->
  </div>
</template>

<script>
// import moment from 'moment';
// import { moment } from 'src/plugins/moment';
import { moment } from 'src/plugins/moment.js';
import { firebaseAuth, fbprovider } from 'src/boot/firebase';
import { firebaseDb } from 'src/boot/firebase';
import timeService from 'src/servies/timeService';

export default {
  computed: {
    time() {
      // return moment('2020/04/20 17:25').format('x');
      return moment()
        .startOf('day')
        .add(55, 'minutes')
        .format('H:mm');
    },
    user() {
      return firebaseAuth.currentUser;
    },
    firebaseAu() {
      return firebaseAuth;
    },
  },
  methods: {
    optionsFn(date) {
      console.log(timeService.getTodayDate());
      return date >= '01/01/2020' && date <= this.dueDate;
    },
  },
};
</script>

<style lang="scss" scoped></style>
