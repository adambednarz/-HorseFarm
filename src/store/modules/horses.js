import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  horses: {
    ID1: {
      name: 'Bahir',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-2',
      owner: 'US1',
      attendant: '',
      description: 'Uwaga to wariat nie koń',
      followedBy: ['US1', 'US2', 'US3'],
    },
    ID2: {
      name: 'Emma',
      birthDate: '10/02/2006',
      breed: 'małopolak',
      status: 'active',
      box: 'DL-2',
      owner: 'US1',
      attendant: '',
      description: 'Miła spokojna',
      followedBy: ['US1', 'US2'],
    },
    ID3: {
      name: 'Panda',
      birthDate: '20/02/1999',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-12',
      owner: 'US2',
      attendant: 'US2',
      description: 'Straszny leń',
      followedBy: ['US3'],
    },
    ID4: {
      name: 'Klaris',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'O-3',
      owner: 'US3',
      attendant: 'US3',
      description: '',
      followedBy: ['US1', 'US3'],
    },
    ID5: {
      name: 'Bahir',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-2',
      owner: 'US1',
      attendant: '',
      description: 'Uwaga to wariat nie koń',
      followedBy: ['US1', 'US2', 'US3'],
    },
    ID6: {
      name: 'Emma',
      birthDate: '10/02/2006',
      breed: 'małopolak',
      status: 'active',
      box: 'DL-2',
      owner: 'US1',
      attendant: '',
      description: 'Miła spokojna',
      followedBy: ['US1', 'US2'],
    },
    ID7: {
      name: 'Panda',
      birthDate: '20/02/1999',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-12',
      owner: 'US2',
      attendant: 'US2',
      description: 'Straszny leń',
      followedBy: ['US3'],
    },
    ID8: {
      name: 'Klaris',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'O-3',
      owner: 'US3',
      attendant: 'US3',
      description: '',
      followedBy: ['US1', 'US3'],
    },
    ID9: {
      name: 'Bahir',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-2',
      owner: 'US1',
      attendant: '',
      description: 'Uwaga to wariat nie koń',
      followedBy: ['US1', 'US2', 'US3'],
    },
    ID10: {
      name: 'Emma',
      birthDate: '10/02/2006',
      breed: 'małopolak',
      status: 'active',
      box: 'DL-2',
      owner: 'US1',
      attendant: '',
      description: 'Miła spokojna',
      followedBy: ['US1', 'US2'],
    },
    ID11: {
      name: 'Panda',
      birthDate: '20/02/1999',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-12',
      owner: 'US2',
      attendant: 'US2',
      description: 'Straszny leń',
      followedBy: ['US3'],
    },
    ID12: {
      name: 'Klaris',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'O-3',
      owner: 'US3',
      attendant: 'US3',
      description: '',
      followedBy: ['US1', 'US3'],
    },
    ID13: {
      name: 'Bahir',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-2',
      owner: 'US1',
      attendant: '',
      description: 'Uwaga to wariat nie koń',
      followedBy: ['US1', 'US2', 'US3'],
    },
    ID14: {
      name: 'Emma',
      birthDate: '10/02/2006',
      breed: 'małopolak',
      status: 'active',
      box: 'DL-2',
      owner: 'US1',
      attendant: '',
      description: 'Miła spokojna',
      followedBy: ['US1', 'US2'],
    },
    ID15: {
      name: 'Panda',
      birthDate: '20/02/1999',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-12',
      owner: 'US2',
      attendant: 'US2',
      description: 'Straszny leń',
      followedBy: ['US3'],
    },
    ID16: {
      name: 'Klaris',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'O-3',
      owner: 'US3',
      attendant: 'US3',
      description: '',
      followedBy: ['US1', 'US3'],
    },
  },
};
const mutations = {
  ADD_HORSE(state, payload) {
    Vue.set(state.horses, payload.id, payload.horse);
  },
  UPDATE_HORSE(state, payload) {
    Object.assign(state.horse[payload.id], payload.updates);
  },
  DELETE_HORSE(state, id) {
    Vue.delete(state.horse, id);
  },
};
const actions = {
  testA() {
    console.log('akcja działa poprawnie');
  },
  addHorse({ commit }, horse) {
    let horsId = uid();
    let payload = {
      id: horseId,
      horse: horse,
    };
    commit('ADD_HORSE', payload);
  },
  updateHorse({ commit }, payload) {
    commit('UPDATE_HORSE', payload);
  },
  deleteHorse({ commit }, id) {
    commit('DELETE_HORSE', id);
  },
};
const getters = {
  getAllHorses: state => {
    return state.horses;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
