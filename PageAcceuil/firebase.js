

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzfPizo6NgnW4dsf7gHTZ7dQUz1nEZsuk",
  authDomain: "gestionnaire-de-note--etudiant.firebaseapp.com",
  projectId: "gestionnaire-de-note--etudiant",
  storageBucket: "gestionnaire-de-note--etudiant.appspot.com",
  messagingSenderId: "657319701506",
  appId: "1:657319701506:web:06929db2e5d3a965dccb1b",
  measurementId: "G-27LMD9EVRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);