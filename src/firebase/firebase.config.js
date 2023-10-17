// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMhd1HSkdutctya-vaQM6b6MrUb-8VHA",
  authDomain: "brand-shop-app.firebaseapp.com",
  projectId: "brand-shop-app",
  storageBucket: "brand-shop-app.appspot.com",
  messagingSenderId: "931614397154",
  appId: "1:931614397154:web:1fc7e2c101dc64b2e544bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;