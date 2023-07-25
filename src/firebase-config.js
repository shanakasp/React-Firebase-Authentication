// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc2oSxsd0NHStBQ3HQPixhDLpCeE5eVsc",
  authDomain: "authentication-react-2883c.firebaseapp.com",
  projectId: "authentication-react-2883c",
  storageBucket: "authentication-react-2883c.appspot.com",
  messagingSenderId: "659890734311",
  appId: "1:659890734311:web:c7f3b5144a9da705c70e42",
  measurementId: "G-SK286LW3RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)