// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQNLPcuYSKP0HiaUpJ-YymuOz6gtPrT_E",
  authDomain: "netflix-gpt-b842f.firebaseapp.com",
  projectId: "netflix-gpt-b842f",
  storageBucket: "netflix-gpt-b842f.firebasestorage.app",
  messagingSenderId: "388648766372",
  appId: "1:388648766372:web:8c83bb11402f1b0e010f31",
  measurementId: "G-S876LQKJSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
