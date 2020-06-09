import { firebaseAuth, fbprovider } from 'src/boot/firebase';
import { LocalStorage, Loading } from 'quasar';
import { showErrorMessage } from 'src/functions/showErrorMessage';
import usersService from 'src/servies/usersService';

const state = {
  loggedIn: false,
};
const mutations = {
  SET_LOGGEDIN(state, value) {
    state.loggedIn = value;
  },
};
const actions = {
  registerUser({}, payload) {
    let displayName = payload.displayName;
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        let payload = {
          userId: respone.user.uid,
          updates: {
            displayName: displayName,
            photoUrl: respone.user.photoURL,
            loginEmail: respone.user.email,
          },
        };
        usersService.updateUserWhileLogin(payload);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then()
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUserWithFacebook() {
    Loading.show();
    firebaseAuth
      .signInWithRedirect(fbprovider)
      .then(respone => {
        let payload = {
          userId: respone.user.uid,
          updates: {
            displayName: respone.user.displayName,
            photoUrl: respone.user.photoURL,
            loginEmail: respone.user.email,
          },
        };

        usersService.updateUserWhileLogin(payload);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit('SET_LOGGEDIN', true);
        LocalStorage.set('loggedIn', true);
        this.$router.push('/activities');
        dispatch('users/fbReadData', null, { root: true });
        dispatch('users/updateUserStatus', null, { root: true });
        dispatch('horses/fbReadData', null, { root: true });
      } else {
        commit('SET_LOGGEDIN', false);
        LocalStorage.set('loggedIn', false);
        commit('users/SET_USERS_DOWNLOADED', false, { root: true });
        commit('horses/SET_HORSES_DOWNLOADED', false, { root: true });
        this.$router.replace('/auth');
      }
    });
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
