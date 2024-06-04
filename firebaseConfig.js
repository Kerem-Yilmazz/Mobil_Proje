// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIrwFXlIADv9UX1LGUBHe6C07AjhYLc8g",
  authDomain: "yemekuygulama-9023b.firebaseapp.com",
  projectId: "yemekuygulama-9023b",
  storageBucket: "yemekuygulama-9023b.appspot.com",
  messagingSenderId: "485090166549",
  appId: "1:485090166549:web:1dcd023d99813566bc4b1c",
  measurementId: "G-CDLPHNH66P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;