import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAiV8_rbAWVks12ezKik_EK2mkiasb6lnA",
    authDomain: "project-central-react.firebaseapp.com",
    projectId: "project-central-react",
    storageBucket: "project-central-react.appspot.com",
    messagingSenderId: "190272084603",
    appId: "1:190272084603:web:91dd98e56ebd9dcb50e0de"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;