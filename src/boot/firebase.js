// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyA_xRo9Fn3PJ-3PSRWlPKYO331U8m_DZDE',
  authDomain: 'horsefarm-a4e77.firebaseapp.com',
  databaseURL: 'https://horsefarm-a4e77.firebaseio.com',
  projectId: 'horsefarm-a4e77',
  storageBucket: 'horsefarm-a4e77.appspot.com',
  messagingSenderId: '972039816082',
  appId: '1:972039816082:web:3e5bc5e8aea3d5224f774b',
  measurementId: 'G-441KETWCXQ',
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
firebase.analytics();

//facebook provider
let fbprovider = new firebase.auth.FacebookAuthProvider();

export { firebaseDb, firebaseAuth, fbprovider };
