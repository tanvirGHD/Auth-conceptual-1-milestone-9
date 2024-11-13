// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wvwZP-cVyG5J8HMGa4kgHaESns8kn4o",
  authDomain: "fir-first-concep-project1.firebaseapp.com",
  projectId: "fir-first-concep-project1",
  storageBucket: "fir-first-concep-project1.firebasestorage.app",
  messagingSenderId: "949926091228",
  appId: "1:949926091228:web:9f4b278950ea27ba03d719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;