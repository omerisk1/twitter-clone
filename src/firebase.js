import firebase from 'firebase';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyADHOKF5-s2xt74wXlD1i4IAKE-7rWmwK4",
    authDomain: "twitter-clone-411ba.firebaseapp.com",
    projectId: "twitter-clone-411ba",
    storageBucket: "twitter-clone-411ba.appspot.com",
    messagingSenderId: "248521097233",
    appId: "1:248521097233:web:ca082edd5c5f99871b71b0",
    measurementId: "G-2R839VVX63"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = firebase.firestore();

  export default db;