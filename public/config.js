// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
require('dotenv').config()
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN ,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Gestion des événements
document.getElementById('googleSignInButton').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Utilisateur connecté :", user);
    })
    .catch((error) => {
      console.error("Erreur lors de la connexion :", error);
    });
});

// Déconnexion
document.getElementById('signOutButton').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log("Utilisateur déconnecté");
    })
    .catch((error) => {
      console.error("Erreur lors de la déconnexion :", error);
    });
});