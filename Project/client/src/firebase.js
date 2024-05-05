// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "new-project-be5a7.firebaseapp.com",
  projectId: "new-project-be5a7",
  storageBucket: "new-project-be5a7.appspot.com",
  messagingSenderId: "497317897365",
  appId: "1:497317897365:web:4b241edd97276fd6a0a79c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);