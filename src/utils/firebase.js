// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d5149.firebaseapp.com",
  projectId: "blog-d5149",
  storageBucket: "blog-d5149.appspot.com",
  messagingSenderId: "50860383563",
  appId: "1:50860383563:web:8f53955d833662be5b9cce",
  measurementId: "G-KT8EWTKDJV"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
