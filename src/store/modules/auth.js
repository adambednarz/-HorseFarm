import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseAuth } from 'src/boot/firebase';

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
  handleAuthStateChange({ commit }) {
    console.log('handleAuthStateChange');
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        commit('SET_LOGGEDIN', true);
        // User is signed in.
      } else {
        commit('SET_LOGGEDIN', false);
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
