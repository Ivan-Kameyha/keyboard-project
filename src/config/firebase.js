// Este codigo inicia la conexion con el backend
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cjc0P2RyYp80szpEK1pxOMxSYjJMFGo",
  authDomain: "keyboard-project-ba456.firebaseapp.com",
  projectId: "keyboard-project-ba456",
  storageBucket: "keyboard-project-ba456.appspot.com",
  messagingSenderId: "61775208030",
  appId: "1:61775208030:web:32259a3be21def06e41ecf",
  measurementId: "G-N2W1LWHE5V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)