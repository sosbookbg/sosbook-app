import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8R6zPHVE-6D8B5dXUXga0E0MXRfAiA",
  authDomain: "sosbook-app.firebaseapp.com",
  projectId: "sosbook-app",
  storageBucket: "sosbook-app.appspot.com",
  messagingSenderId: "188604167437",
  appId: "1:188604167437:web:ab34c4b54e6ccc97e56c44"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
