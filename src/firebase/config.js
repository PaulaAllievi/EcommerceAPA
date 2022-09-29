// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByePWG_LjJcdhK8A4otA8x5XuC2HAAE1A",
  authDomain: "ecommerce-apa.firebaseapp.com",
  projectId: "ecommerce-apa",
  storageBucket: "ecommerce-apa.appspot.com",
  messagingSenderId: "270273057883",
  appId: "1:270273057883:web:6729495954b9179eeb5b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);