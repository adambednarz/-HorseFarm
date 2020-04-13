import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  horsesDownloaded: false,
  horses: {
    ID1: {
      name: 'Bahir',
      birthDate: '20/02/2004',
      breed: 'małopolak',
      status: 'active',
      box: 'ML-2',
      owner: 'US1',
      attendant: '',
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/92514942_1096691367355078_1739104778673192960_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=BsEA8l8DE7cAX-vsssf&_nc_ht=scontent-frx5-1.xx&oh=c86f6a018730d888c5787e5bf5e80720&oe=5EB1B483',
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
      imgSrc:
        'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p960x960/45355492_726472584376960_1491125358550843392_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=Ucf1VkUpEaEAX8YTUxm&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=34fdd069103dc52ede4d2d74e1521365&oe=5EB18404',
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
      imgSrc:
        'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/92514942_1096691367355078_1739104778673192960_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=BsEA8l8DE7cAX-vsssf&_nc_ht=scontent-frx5-1.xx&oh=c86f6a018730d888c5787e5bf5e80720&oe=5EB1B483',
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
      imgSrc: '',
      description: 'Uwaga to wariat nie koń',
      followedBy: ['US1', 'US2', 'US3'],
    },
    ID6: {
      name: 'Emma',
      birthDate: '10/02/2006',
      iimgSrc: '',
      breed: 'małopolak',
      status: 'active',
      box: 'DL-2',
      owner: 'US1',
      attendant: '',
      imgSrc:
        'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p960x960/45355492_726472584376960_1491125358550843392_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=Ucf1VkUpEaEAX8YTUxm&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=34fdd069103dc52ede4d2d74e1521365&oe=5EB18404',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      iimgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
      iimgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/18814046_439906569700231_2416300268718454774_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=xNMKc97HDX8AX9LyTsl&_nc_ht=scontent-frt3-2.xx&oh=6351c9e41003c81c64b0e91d942a2476&oe=5EB4595F',
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
  CLEAR_ACTIVITIES(state) {
    state.horses = {};
  },
  SET_ACTIVITIES_DOWNLOADED(state, value) {
    state.horsesDownloaded = value;
  },
};
const actions = {
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
  getIdAndNameHorses: state => {
    let horses = [];
    Object.keys(state.horses).forEach(key => {
      horses.push({
        id: key,
        name: state.horses[key].name,
      });
    });
    return horses;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
