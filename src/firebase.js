import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-ayFWRXni8rf2cWPUVs3nhpoC7tBH57Q",
  authDomain: "ship-dashr.firebaseapp.com",
  projectId: "ship-dashr",
  storageBucket: "ship-dashr.firebasestorage.app",
  messagingSenderId: "510376426663",
  appId: "1:510376426663:web:3da8402aa262ca6178af82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};