// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth}from "firebase/auth";
import {getFirestore}from "firebase/firestore"
import {getStorage}from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjT9URW0t3INik-xjK9UQDVNcpuXqxn4M",
  authDomain: "appreact-cc475.firebaseapp.com",
  projectId: "appreact-cc475",
  storageBucket: "appreact-cc475.appspot.com",
  messagingSenderId: "739937373450",
  appId: "1:739937373450:web:13ae5d3ba6a0948e00fef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

