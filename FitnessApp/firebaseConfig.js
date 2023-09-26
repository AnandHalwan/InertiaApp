// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS2AV81ilEC7L6Z9a0HDX7B_gafTLzo6s",
  authDomain: "inertia-ed09e.firebaseapp.com",
  projectId: "inertia-ed09e",
  storageBucket: "inertia-ed09e.appspot.com",
  messagingSenderId: "268454047886",
  appId: "1:268454047886:web:d6ac73cb62e05ba9c399df",
  measurementId: "G-XCGD7YPW6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



const analytics = getAnalytics(app);

