import Vue from 'vue';

const state = {
  ID1: {
    createdAt: '20/02/2020',
    createdBy: 'UID czy name',
    type: 'jazda w terenie',
    horse: 'ID czy name',
    description:
      'Ciekawo czy ze względu na optymalizację zapytań lepiej zapisywac tu id czy pełne nazwy wydajes mi się że pełne nazwy będą lepszym rozwiązaniem',
  },
  ID1: {
    createdAt: '20/02/2020',
    createdBy: 'Adam',
    type: 'jazda w terenie',
    horse: 'Bahir',
    description:
      '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia quos odit ',
  },
  ID3: {
    createdAt: '20/02/2019',
    createdBy: 'Karol',
    type: 'jazda w terenie',
    horse: 'Emma',
    description:
      '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia quos odit ',
  },
  ID4: {
    createdAt: '20/02/2020',
    createdBy: 'Adam',
    type: 'jazda w terenie',
    horse: 'Jowisz',
    description:
      '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia quos odit ',
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
