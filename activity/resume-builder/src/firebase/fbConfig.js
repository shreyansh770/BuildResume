import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAtk64fF6sTo_5zb8rq1-RQYEPHvayx5wE",
    authDomain: "resume-builder-eb6b2.firebaseapp.com",
    projectId: "resume-builder-eb6b2",
    storageBucket: "resume-builder-eb6b2.appspot.com",
    messagingSenderId: "1017872861350",
    appId: "1:1017872861350:web:8c0919c15a21715dd84c67"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const db = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , db , provider, firebaseApp};