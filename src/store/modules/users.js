import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseAuth, firebaseDb, serverTime } from 'src/boot/firebase';
import { showErrorMessage } from 'src/functions/showErrorMessage';
import usersService from 'src/servies/usersService';

const state = {
  usersDownloaded: false,
  users: {},
};
const mutations = {
  ADD_USER(state, payload) {
    Vue.set(state.users, payload.id, payload.user);
  },
  UPDATE_USER(state, payload) {
    Object.assign(state.users[payload.id], payload.updates);
  },
  DELETE_USER(state, id) {
    Vue.delete(state.users, id);
  },
  CLEAR_USERS(state) {
    state.users = {};
  },
  SET_USERS_DOWNLOADED(state, value) {
    state.usersDownloaded = value;
  },
};
const actions = {
  addUser({ commit }, user) {
    let userId = uid();
    let payload = {
      id: userId,
      user: user,
    };
    commit('ADD_USER', payload);
  },
  updateUser({ commit }, payload) {
    commit('UPDATE_USER', payload);
  },
  deleteUser({ commit }, id) {
    commit('DELETE_USER', id);
  },
  fbReadData({ commit }) {
    let users = firebaseDb.ref('users/');

    // initial check for data
    users.once(
      'value',
      snapshot => {
        commit('SET_USERS_DOWNLOADED', true);
      },
      error => {
        if (error) {
          if (error.message) {
            showErrorMessage(error.message);
            // this.$router.replace('/auth');
          }
        }
      },
    );

    // child added
    users.on('child_added', snapshot => {
      let user = snapshot.val();
      let payload = {
        id: snapshot.key,
        user: user,
      };
      commit('ADD_USER', payload);
    });

    // child changed
    users.on('child_changed', snapshot => {
      let user = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: user,
      };
      commit('UPDATE_USER', payload);
    });

    // child removed
    users.on('child_removed', snapshot => {
      let userId = snapshot.key;
      commit('DELETE_USER', userId);
    });
  },

  updateUserStatus({}) {
    let userId = firebaseAuth.currentUser.uid;
    let ref = firebaseDb.ref('users/' + userId);
    ref.update({
      status: 'active',
    });
    ref.onDisconnect().update({
      status: serverTime,
    });
  },
};
const getters = {
  getAllUsers: state => {
    return state.users;
  },
  getById: state => id => {
    return state.users[id];
  },
  getLoggedUserRole: state => id => {
    const userRole = state.users[id].role;
    if (userRole) {
      return userRole;
    } else {
      return null;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
