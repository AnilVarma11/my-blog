// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzp74uAqJWWSlWc801ySgtFR_BdT30jQ4",
  authDomain: "blog-project-e57a5.firebaseapp.com",
  projectId: "blog-project-e57a5",
  storageBucket: "blog-project-e57a5.appspot.com",
  messagingSenderId: "193167995043",
  appId: "1:193167995043:web:90b2cbbf7b64cf791b4f16",
  measurementId: "G-Y2KCDW34JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

const analytics = getAnalytics(app);