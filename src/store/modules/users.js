import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  users: {
    ID1: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID2: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID3: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID4: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID5: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID6: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID7: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID8: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID9: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID10: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID11: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID12: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID13: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID14: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID15: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID16: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      lastLogin: '20/02/2020',
      active: false,
    },
  },
};
const mutations = {
  ADD_USER(state, payload) {
    Vue.set(state.users, payload.id, payload.user);
  },
  UPDATE_USER(state, payload) {
    Object.assign(state.user[payload.id], payload.updates);
  },
  DELETE_USER(state, id) {
    Vue.delete(state.user, id);
  },
};
const actions = {
  testA() {
    console.log('akcja działa poprawnie');
  },
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
};
const getters = {
  getAllUsers: state => {
    return state.users;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
