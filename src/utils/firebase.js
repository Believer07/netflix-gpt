// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeo-0D18sfoNVX1EM53DwX_x9zoueRKRQ",
  authDomain: "netflixgpt-hh07.firebaseapp.com",
  projectId: "netflixgpt-hh07",
  storageBucket: "netflixgpt-hh07.appspot.com",
  messagingSenderId: "615528722488",
  appId: "1:615528722488:web:9c5c8147b3f6109d7b36cd",
  measurementId: "G-3N2QM34XTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// to have auth at central place
export const auth = getAuth();