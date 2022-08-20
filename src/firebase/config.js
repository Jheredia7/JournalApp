// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVNq1bbci3mqrhDDofiXocTeIlGBwa7g",
  authDomain: "journal-app-696aa.firebaseapp.com",
  projectId: "journal-app-696aa",
  storageBucket: "journal-app-696aa.appspot.com",
  messagingSenderId: "391296221167",
  appId: "1:391296221167:web:19fb82b77280b856efc01a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
