import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGObVgzpYf3sjQx4fy15iy_1uqGbqjoEE",
  authDomain: "mymoney-c03ae.firebaseapp.com",
  projectId: "mymoney-c03ae",
  storageBucket: "mymoney-c03ae.appspot.com",
  messagingSenderId: "490809953805",
  appId: "1:490809953805:web:f6c7f44fbe38afa467cf44",
};

//initialize firebase
// firebase.default.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//initialize service
const projectFirestore = firebase.firestore();
const projectAuthentication = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuthentication, timestamp };
