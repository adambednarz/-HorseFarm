import Vue from 'vue';
import { firebaseAuth, fbprovider } from 'src/boot/firebase';
import { LocalStorage, Loading } from 'quasar';
import { showErrorMessage } from 'src/functions/showErrorMessage';

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
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUserWithFacebook() {
    Loading.show();
    firebaseAuth
      .signInWithPopup(fbprovider)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit('SET_LOGGEDIN', true);
        LocalStorage.set('loggedIn', true);
        this.$router.push('/users');
      } else {
        commit('SET_LOGGEDIN', false);
        LocalStorage.set('loggedIn', false);
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
