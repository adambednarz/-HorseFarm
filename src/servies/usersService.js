import { uid, Notify } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';

export default {
  currentUser() {
    return firebaseAuth.currentUser.uid;
  },
  updateUserWhileLogin(payload) {
    let usersRef = firebaseDb.ref('users/' + payload.userId);
    usersRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
  updateUsers(payload) {
    let usersRef = firebaseDb.ref('users/' + payload.usersId);
    usersRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Dane zostały zaktualizowane!');
      }
    });
  },
  removeUsers(userId) {
    let usersRef = firebaseDb.ref('users/' + userId);
    usersRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Użytkownik został usunięty');
      }
    });
  },
};
