import { uid, Notify } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';

export default {
  currentUser() {
    return firebaseAuth.currentUser.uid;
  },
  addHorse(payload) {
    let userId = this.currentUser(); //TODO dodać kto jest właścicielem i opiekunem
    let horseId = uid();
    let horseRef = firebaseDb.ref('horses/' + horseId);

    horseRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Koń został dodany!');
      }
    });
  },
  updateHorse(payload) {
    let horseRef = firebaseDb.ref('horses/' + payload.horseId);
    horseRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Dane zostały zaktualizowane!');
      }
    });
  },
  removeHorse(horseId) {
    let horseRef = firebaseDb.ref('tasks/' + horseId);
    horseRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create('Task removed');
      }
    });
  },
};
