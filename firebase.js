// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmLsIxL3T_YNz42lMXCGGlwWLpyG7fgQY",
    authDomain: "leftap-141dd.firebaseapp.com",
    projectId: "leftap-141dd",
    storageBucket: "leftap-141dd.appspot.com",
    messagingSenderId: "785874051612",
    appId: "1:785874051612:web:108a217a66693e8147f5d9",
    measurementId: "G-32VY0YJCGM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = app.auth();

// const Provider = new firebase.auth.GoogleAuthProvider();

export { db };