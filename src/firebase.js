import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOe5p-6hZj8TWWMNlEzJxTj1kKqlYVZ88",
  authDomain: "farmconnect-4d18f.firebaseapp.com",
  projectId: "farmconnect-4d18f",
  storageBucket: "farmconnect-4d18f.appspot.com",
  messagingSenderId: "979033780044",
  appId: "1:979033780044:web:8fa24d3f0a0a06787e29e9",
  measurementId: "G-19TKCFRWKH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app,auth };