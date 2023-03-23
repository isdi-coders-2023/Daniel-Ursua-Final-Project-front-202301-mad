// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrSPAefmgQnxKukkCkVL8kFnMsLrkl_fA",
  authDomain: "finalproyect-17862.firebaseapp.com",
  projectId: "finalproyect-17862",
  storageBucket: "finalproyect-17862.appspot.com",
  messagingSenderId: "257326299344",
  appId: "1:257326299344:web:c4b119ac489a6bee3386d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
