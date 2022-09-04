// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJWmXhdAy4U-6FB29JG2NzfuU5a-8KOIU",
  authDomain: "eyestronomy-react.firebaseapp.com",
  projectId: "eyestronomy-react",
  storageBucket: "eyestronomy-react.appspot.com",
  messagingSenderId: "804635334522",
  appId: "1:804635334522:web:a0037bb7f0fd093b22a8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db