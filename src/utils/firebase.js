import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA3BC3f8PSdLWW0LJGg48sGtkqMs2F22tQ",
  authDomain: "netflixgpt-6.firebaseapp.com",
  projectId: "netflixgpt-6",
  storageBucket: "netflixgpt-6.firebasestorage.app",
  messagingSenderId: "173156252511",
  appId: "1:173156252511:web:4f8d0b306eecb1b74414ea",
  measurementId: "G-ZE70JW4V08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

// Set persistence to browserLocalPersistence (this will keep the user signed in after page reload)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Ensure the app works with the user's session even after page reloads
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth };
