import Vue from 'vue';

const state = {
  ID1: {
    name: 'Bahir',
    birthDate: '20/02/2004',
    breed: 'małopolak',
    owner: 'US1',
    attendant: '',
    description: 'Uwaga to wariat nie koń',
    followedBy: ['US1', 'US2', 'US3'],
  },
  ID2: {
    name: 'Emma',
    birthDate: '10/02/2006',
    breed: 'małopolak',
    owner: 'US1',
    attendant: '',
    description: 'Miła spokojna',
    followedBy: ['US1', 'US2'],
  },
  ID3: {
    name: 'Panda',
    birthDate: '20/02/1999',
    breed: 'małopolak',
    owner: 'US2',
    attendant: 'US2',
    description: 'Straszny leń',
    followedBy: ['US3'],
  },
  ID4: {
    name: 'Klaris',
    birthDate: '20/02/2004',
    breed: 'małopolak',
    owner: 'US3',
    attendant: 'US3',
    description: '',
    followedBy: ['US1', 'US3'],
  },
};
const mutations = {};
const actions = {};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
