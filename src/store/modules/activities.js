import Vue from 'vue';
import activityService from 'src/servies/activityService';

const state = {
  activitiesDownloaded: false,
  activities: {},
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
