import { uid, Notify } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';

export default {
  currentUser() {
    return firebaseAuth.currentUser.uid;
  },
  addHorse(payload) {
    let userId = this.currentUser();

    let horseRef = firebaseDb.ref('horses/');
    let horse = {
      name: payload.name,
      box: payload.box,
      breed: payload.breed,
      birthDate: payload.birthDate,
      owner: payload.owner,
      attendant: payload.attendant,
      description: payload.description,
      photoUrl: payload.photoUrl,
      addedBy: userId,
    };
    horseRef.push(horse, error => {
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
