import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDmtrMWLxzkO6-uKPG4DvO3qi74Ii3zmhA",
    authDomain: "linkedin-clone-72503.firebaseapp.com",
    projectId: "linkedin-clone-72503",
    storageBucket: "linkedin-clone-72503.appspot.com",
    messagingSenderId: "1016299886169",
    appId: "1:1016299886169:web:7b94769868647247ee4348"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig); /**Connect to the database */
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth,firebase};
