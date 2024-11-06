import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCskuM6Yzm7brpSDWX0I42bh8ndqNNKam0",
  authDomain: "club-ee9e6.firebaseapp.com",
  projectId: "club-ee9e6",
  storageBucket: "club-ee9e6.firebasestorage.app",
  messagingSenderId: "756200297833",
  appId: "1:756200297833:web:92e620ee56227083f159f8",
  measurementId: "G-1V8BR8Q6HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a
// reference to the auth service
const auth = getAuth(app);
