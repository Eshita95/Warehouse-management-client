// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMTrD0QYbZoeYqekIWNkJlbI2GCgc_zxQ",
  authDomain: "warehouse-management-23b20.firebaseapp.com",
  projectId: "warehouse-management-23b20",
  storageBucket: "warehouse-management-23b20.appspot.com",
  messagingSenderId: "732379523612",
  appId: "1:732379523612:web:8985c1036bc58bdaa58dd9",
  measurementId: "G-0RPRBD5SWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
