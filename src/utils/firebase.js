// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1a879.firebaseapp.com",
  projectId: "blog-1a879",
  storageBucket: "blog-1a879.appspot.com",
  messagingSenderId: "793990726235",
  appId: "1:793990726235:web:e85ebb5fba0d71d9d3f57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);