import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbPLN5_v-xBuCi80f25ozdwXwEwNGeS0I",
  authDomain: "hiiii-6ff99.firebaseapp.com",
  projectId: "hiiii-6ff99",
  storageBucket: "hiiii-6ff99.firebasestorage.app",
  messagingSenderId: "969770499181",
  appId: "1:969770499181:web:fe82c47d04957f90c89364",
  measurementId: "G-7D7GQ8R2NJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
