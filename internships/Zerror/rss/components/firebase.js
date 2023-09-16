// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  addDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgjrxyL47A4Pyfj6N6_5_mPIQZzJGbw28",
  authDomain: "rsszerror.firebaseapp.com",
  projectId: "rsszerror",
  storageBucket: "rsszerror.appspot.com",
  messagingSenderId: "695282762278",
  appId: "1:695282762278:web:46bd80cf208108e6e95ce7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {
  db,
  doc,
  onSnapshot,
  onAuthStateChanged,
  collection,
  getDoc,
  setDoc,
  getDocs,
  query,
  signOut,
  orderBy,
  where,
  addDoc,
  storage,
  ref,
  uploadString,
  uploadBytes,
  getDownloadURL,
  updateDoc,
  getAuth,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};

export default app;