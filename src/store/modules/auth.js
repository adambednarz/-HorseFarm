import Vue from 'vue';
import { firebaseAuth } from 'src/boot/firebase';
import { uid } from 'quasar';
import { LocalStorage } from 'quasar';

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
    console.log('register action', payload);
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  loginUser({}, payload) {
    console.log('register action', payload);
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  logoutUser() {
    console.log('logout');
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      console.log('change state');
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
