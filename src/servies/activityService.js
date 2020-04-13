import Vue from 'vue';
import { uid, Notify } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';
import { mapActions } from 'vuex';

export default {
  currentUser() {
    return firebaseAuth.currentUser.uid;
  },
  addActivity(payload) {
    console.log(payload);
    let userId = this.currentUser();
    let activityId = uid();
    let horseActivityRef = firebaseDb.ref(
      'horsesActivities/' + payload.horseId + '/' + activityId,
    );
    let userActivityRef = firebaseDb.ref(
      'usersActivities/' + userId + '/' + activityId,
    );

    horseActivityRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Aktywność została dodana!');
      }
    });

    userActivityRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
};
