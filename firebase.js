import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhfFMuGcnVTT50XDFjOTujwk0g8QL6MfM",
    authDomain: "whatsapp3-7c1e1.firebaseapp.com",
    projectId: "whatsapp3-7c1e1",
    storageBucket: "whatsapp3-7c1e1.appspot.com",
    messagingSenderId: "509632324425",
    appId: "1:509632324425:web:3d15d0449fa6bb7f23b098"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  
  const db = app.firestore();
  const auth=app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth , provider}