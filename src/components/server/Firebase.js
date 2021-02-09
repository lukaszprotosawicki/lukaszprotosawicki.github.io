import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaHToxUecCiSS0UuOd0TH4WO8K1ipaPAM",
  authDomain: "lukaszprotosawicki-4c4d5.firebaseapp.com",
  projectId: "lukaszprotosawicki-4c4d5",
  storageBucket: "lukaszprotosawicki-4c4d5.appspot.com",
  messagingSenderId: "994050648302",
  appId: "1:994050648302:web:41d6ef305ce83cf2d5ebff",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
