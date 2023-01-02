// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth}from "firebase/auth";
// import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUFG1FJUnwUW2cPs_GR_sUXOoRs-sZz7Q",
  authDomain: "clone-project-65387.firebaseapp.com",
  projectId: "clone-project-65387",
  storageBucket: "clone-project-65387.appspot.com",
  messagingSenderId: "665300867922",
  appId: "1:665300867922:web:5453bce6ce37140f05388b",
  measurementId: "G-5EPPMMEL4J",
};

// Initialize Firebase
 
const app = firebase.initializeApp(firebaseConfig);
const auth =firebase.auth(app)
const db = app.firestore();

export {db,auth}
// const analytics = getAnalytics(app);
