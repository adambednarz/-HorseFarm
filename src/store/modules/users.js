import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  users: {
    ID1: {
      firstName: 'Paweł',
      secondName: 'Guzy',
      rank: 'rotmistrz',
      nick: '',
      imgSrc:
        'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/s960x960/51031545_1021807851352960_4096313801450717184_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=mmpV7pa4mowAX9GgQiI&_nc_ht=scontent-frt3-1.xx&_nc_tp=7&oh=250aca4532658fd9660788361a9318c0&oe=5EB3B57B',
      lastLogin: '',
      active: true,
    },
    ID2: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      rank: 'ułan',
      nick: '',
      imgSrc:
        'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/c9.0.160.160a/p160x160/294365_212291525503682_46239996_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=Z13yAG0chZcAX9v_wUA&_nc_ht=scontent-frt3-1.xx&oh=b3dc98afc12394af25f2bb5409e99c44&oe=5EB14699',
      lastLogin: '',
      active: true,
    },
    ID3: {
      firstName: 'Ewa',
      secondName: 'Pelc',
      rank: 'krakuska',
      nick: 'ewczi',
      lastLogin: '16:40',
      active: false,
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-0/p370x247/81765898_2667850433335830_6863799424854786048_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=VzWtwxXYlMsAX8DHOBe&_nc_ht=scontent-frt3-2.xx&_nc_tp=6&oh=46c7b9e2ec0d223e3d20afec1b9c2dd6&oe=5EB2A8E6',
    },
    ID4: {
      firstName: 'Tomasz',
      secondName: 'Zamorski',
      rank: 'wachmistrz',
      nick: 'wujo',
      imgSrc:
        'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-0/p640x640/71091996_10212340523387111_9136613229324140544_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=Rdimz58kFWwAX8xQSWu&_nc_ht=scontent-frx5-1.xx&_nc_tp=6&oh=03a0b76f6b5ac1de081ce99bf5e619a5&oe=5EB3EA4B',
      lastLogin: '20 kwi',
      active: false,
    },
    ID5: {
      firstName: 'Dariusz',
      secondName: 'Wlazło',
      rank: 'podchorąży',
      nick: '',
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-1/c0.27.160.160a/p160x160/90702989_3343532252343621_409579085052772352_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=ZoJsZIoZqWgAX8EnyML&_nc_ht=scontent-frt3-2.xx&oh=00c7066938397193a67c6c4f04c3c35f&oe=5EB46E02',
      lastLogin: '25 lut',
      active: false,
    },
    ID6: {
      firstName: 'Dominika',
      secondName: 'Gajewska',
      rank: '',
      nick: '',
      imgSrc:
        'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-1/92490232_3705507016166554_775817594992066560_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=Hek_mJBjr1UAX-ptWIb&_nc_ht=scontent-frt3-2.xx&oh=957c080f8471b4d1c083620e98562542&oe=5EB47CF6',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID7: {
      firstName: 'Dominik',
      secondName: 'Lipniński',
      lastLogin: '10:55',
      rank: 'starszy ułan',
      nick: 'myszka',
      imgSrc:
        'https://scontent-frt3-1.xx.fbcdn.net/v/t31.0-1/p160x160/23926440_1527259417359279_839348142944663479_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=l1n3AnPwOJ4AX_vZtgU&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=e599be8da0349493b9e3c8218216e5dc&oe=5EB41D07',
      active: false,
    },
    ID8: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '11 sty',
      active: false,
    },
    ID9: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID10: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID11: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID12: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID13: {
      firstName: 'Adam',
      secondName: 'Bednarz',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: true,
    },
    ID14: {
      firstName: 'Ewa',
      secondName: 'Nowak',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID15: {
      firstName: 'Tomasz',
      secondName: 'Krawczyk',
      rank: '',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
      lastLogin: '20/02/2020',
      active: false,
    },
    ID16: {
      firstName: 'Jan',
      secondName: 'Kulpa',
      rank: 'podchorąży',
      nick: '',
      imgSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
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
