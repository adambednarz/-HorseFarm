import Vue from 'vue';
import activityService from 'src/servies/activityService';

const state = {
  activitiesDownloaded: false,
  activities: {},
  ID1: {
    createdAt: '20/02/2020',
    createdBy: 'UID czy name',
    type: 'jazda w terenie',
    horse: 'ID czy name',
    description:
      'Ciekawo czy ze względu na optymalizację zapytań lepiej zapisywac tu id czy pełne nazwy wydajes mi się że pełne nazwy będą lepszym rozwiązaniem',
  },
};
const mutations = {
  ADD_ACTIVITY(state, payload) {
    Vue.set(state.activities, payload.id, payload.activity);
  },
  UPDATE_ACTIVITIES(state, payload) {
    Object.assign(state.activities[payload.id], payload.updates);
  },
  DELETE_ACTIVITY(state, id) {
    Vue.delete(state.activities, id);
  },
  CLEAR_ACTIVITIES(state) {
    state.activities = {};
  },
  SET_ACTIVITIES_DOWNLOADED(state, value) {
    state.activitiesDownloaded = value;
  },
};
const actions = {
  addActivity({}, payload) {
    console.log('action');
    activityService.addActivity(payload);
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
