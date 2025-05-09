// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkq3iaKVd2s9CC92eJN9OKcIJJvNYiJmQ",
  authDomain: "gn68s-website.firebaseapp.com",
  projectId: "gn68s-website",
  databaseURL: "https://gn68s-website-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "gn68s-website.firebasestorage.app",
  messagingSenderId: "895298741095",
  appId: "1:895298741095:web:474ec620771f2939c2c5c2",
  measurementId: "G-JGYD7YENZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
export { database };
