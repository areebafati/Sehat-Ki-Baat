// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtS539uwDwgbc8_KCWgYkpFngSWJvpU74",
  authDomain: "login-hamhib.firebaseapp.com",
  projectId: "login-hamhib",
//   storageBucket: "login-hamhib.firebasestorage.app",
//   messagingSenderId: "268608470386",
  appId: "1:268608470386:web:b2558c75f68e8d416071eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);