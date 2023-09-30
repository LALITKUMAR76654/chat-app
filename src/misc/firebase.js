import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDJ49nxDqM-oFMMshr_QrqTTSFdj7L5D-Y',
  authDomain: 'chat-web-app-f2d3c.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-f2d3c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-web-app-f2d3c',
  storageBucket: 'chat-web-app-f2d3c.appspot.com',
  messagingSenderId: '432496117901',
  appId: '1:432496117901:web:f7a838e6107a7478613ac4',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
