// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-5d4a7.firebaseapp.com",
  projectId: "mern-blog-5d4a7",
  storageBucket: "mern-blog-5d4a7.firebasestorage.app",
  messagingSenderId: "804521092024",
  appId: "1:804521092024:web:3d8e976c4a1d105ecca54d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
