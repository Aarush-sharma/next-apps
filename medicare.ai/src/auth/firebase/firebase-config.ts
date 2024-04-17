import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-hvlA1Vae_pCpp8M30olhlLX2aAnEHME",
  authDomain: "next-test-2a8c0.firebaseapp.com",
  projectId: "next-test-2a8c0",
  storageBucket: "next-test-2a8c0.appspot.com",
  messagingSenderId: "603942295945",
  appId: "1:603942295945:web:ced89e1eaf7fcc69b66958",
  measurementId: "G-GDFK4FHME0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth , app};