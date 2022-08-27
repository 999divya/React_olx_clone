import firebase from 'firebase'
import 'firebase/auth'
// import 'firebase/firebase'
// import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC1ugAzNt3NmYoZKSODOPb1KizldjdMNEM",
    authDomain: "myolx-51ff6.firebaseapp.com",
    projectId: "myolx-51ff6",
    storageBucket: "myolx-51ff6.appspot.com",
    messagingSenderId: "287554538216",
    appId: "1:287554538216:web:e34a6997d24b166673d75d",
    measurementId: "G-C89FDCZD76"
  };

  export default firebase.initializeApp(firebaseConfig)