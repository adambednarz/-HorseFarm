import { Notify } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';
import timeService from './timeService';

export default {
  currentUser() {
    return firebaseAuth.currentUser.uid;
  },
  addActivity(payload) {
    let userId = this.currentUser();
    let fullStartDate = timeService.getTimespanFromDateTime(
      payload.date,
      payload.startAt,
    );
    let fullEndDate = timeService.getTimespanFromDateTime(
      payload.date,
      payload.endAt,
    );

    let timeDiff = timeService.diffInMinutes(fullStartDate, fullEndDate);

    let allActivityRef = firebaseDb.ref('allActivities/');
    let activity = {
      uId: userId,
      hId: payload.horseId,
      type: payload.type,
      last: timeDiff,
      end: fullEndDate,
      desc: payload.description,
    };
    allActivityRef.push(activity, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });

    let horseActivityRef = firebaseDb.ref(
      'horsesActivities/' + payload.horseId + '/',
    );
    let horseActivity = {
      uId: userId,
      last: timeDiff,
      type: payload.type,

      end: fullEndDate,
      desc: payload.description,
    };
    horseActivityRef.push(horseActivity, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });

    let userActivityRef = firebaseDb.ref('usersActivities/' + userId + '/');
    let userActivity = {
      hId: payload.horseId,
      last: timeDiff,
      type: payload.type,
      end: fullEndDate,
      desc: payload.description,
    };

    userActivityRef.push(userActivity, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Aktywność została dodana!');
      }
    });
  },
  updateActivity(payload) {
    //TODO zaktualizować po modyfikacjach add
    let userId = this.currentUser();
    let allActivityRef = firebaseDb.ref('activities/' + payload.activityId);
    let horseActivityRef = firebaseDb.ref(
      'horsesActivities/' + payload.horseId + '/' + payload.activityId,
    );
    let userActivityRef = firebaseDb.ref(
      'usersActivities/' + userId + '/' + payload.activityId,
    );

    allActivityRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
    horseActivityRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
    userActivityRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Dane zostały zaktualizowane!');
      }
    });
  },
  removeActivity(payload) {
    let userId = this.currentUser();
    let horseActivityRef = firebaseDb.ref(
      'horsesActivities/' + payload.horseId + '/' + payload.activityId,
    );
    let userActivityRef = firebaseDb.ref(
      'usersActivities/' + userId + '/' + payload.activityId,
    );
    horseActivityRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });

    userActivityRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Aktywność została usunięta');
      }
    });
  },

  async getInitialList() {
    const ref = firebaseDb
      .ref('allActivities')
      .orderByKey()
      .limitToLast(10);

    const snapshot = await ref.once('value');
    const list = snapshot.val();
    console.log(list);
    return list;
  },
  async getScrollList(key) {
    const ref = firebaseDb
      .ref('allActivities')
      .orderByKey()
      .endAt(key)
      .limitToLast(5);

    const snapshot = await ref.once('value');
    const list = snapshot.val();
    console.log('key', key);
    console.log('featch', list);
    return list;
  },
};
