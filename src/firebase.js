// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC9vCoaLfafETZ5ET9Pjr5-pQHrG7T1MH8",
  authDomain: "clone-9e653.firebaseapp.com",
  projectId: "clone-9e653",
  storageBucket: "clone-9e653.appspot.com",
  messagingSenderId: "834975280032",
  appId: "1:834975280032:web:7991bd99dd7baa7107d2c5",
  measurementId: "G-4M9YFB4JWS"
};

const  firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export default firebaseConfig
export {auth, db}