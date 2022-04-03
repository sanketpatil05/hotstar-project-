import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDvf_8kvhNcBai7Ml5_vvwfOr3cwvvq8yw",
  authDomain: "auth-49955.firebaseapp.com",
  projectId: "auth-49955",
  storageBucket: "auth-49955.appspot.com",
  messagingSenderId: "898003621603",
  appId: "1:898003621603:web:0d33f5aa164fb2437117d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase