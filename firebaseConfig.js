// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASY5ydtT9FgsJhc0SMP_SLFcidMjCL9yk",
  authDomain: "movie-app-vxnatt.firebaseapp.com",
  projectId: "movie-app-vxnatt",
  storageBucket: "movie-app-vxnatt.appspot.com",
  messagingSenderId: "765555458236",
  appId: "1:765555458236:web:9d5b9ab243a10bb0c7d0b9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);
// export const FIRESTORAGE = getStorage(FIREBASE_APP);
