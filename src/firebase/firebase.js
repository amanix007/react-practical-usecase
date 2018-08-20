import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyDwF2jB_SYTqrcOxZLD83erOK_z3Xjy9Cs",
    authDomain: "react-practical-usecase.firebaseapp.com",
    databaseURL: "https://react-practical-usecase.firebaseio.com",
    projectId: "react-practical-usecase",
    storageBucket: "react-practical-usecase.appspot.com",
    messagingSenderId: "672827375474"
};

const devConfig = {
    apiKey: "AIzaSyDwF2jB_SYTqrcOxZLD83erOK_z3Xjy9Cs",
    authDomain: "react-practical-usecase.firebaseapp.com",
    databaseURL: "https://react-practical-usecase.firebaseio.com",
    projectId: "react-practical-usecase",
    storageBucket: "react-practical-usecase.appspot.com",
    messagingSenderId: "672827375474"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firebaseall = firebase;

export {
  auth,
  firebaseall
};