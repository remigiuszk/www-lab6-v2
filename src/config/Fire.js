import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAM78k88lXrjeroepbaYHjHS3eMY8LWLT4",
    authDomain: "login-app-48020.firebaseapp.com",
    databaseURL: "https://login-app-48020.firebaseio.com",
    projectId: "login-app-48020",
    storageBucket: "login-app-48020.appspot.com",
    messagingSenderId: "960564644794",
    appId: "1:960564644794:web:c8ff83144ec70a59f8ab83"
  };

  const fire=firebase.initializeApp(config);
  export default fire;