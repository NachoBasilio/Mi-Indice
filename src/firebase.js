import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQrOtWY_DQkFosSjfIfaxofBGxIUVLbps",
  authDomain: "indice-23749.firebaseapp.com",
  projectId: "indice-23749",
  storageBucket: "indice-23749.appspot.com",
  messagingSenderId: "171610587966",
  appId: "1:171610587966:web:764ca091325ec79610626f",
  measurementId: "G-0QFGNN2CQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}