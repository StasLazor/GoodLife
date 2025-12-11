// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0YxXjscVOyI3yewg_0ML1tLHykaJg9r8",
  authDomain: "goodlife-e154b.firebaseapp.com",
  projectId: "goodlife-e154b",
  storageBucket: "goodlife-e154b.firebasestorage.app",
  messagingSenderId: "453321722122",
  appId: "1:453321722122:web:b67452bf7be38538cb52f3",
  measurementId: "G-Y1XLHHMBGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
