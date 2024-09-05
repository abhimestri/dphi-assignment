import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyKH7w3Up8NRe05_mzOG4m_5dF6w8lMrc",
  authDomain: "dphi-7ef55.firebaseapp.com",
  projectId: "dphi-7ef55",
  storageBucket: "dphi-7ef55.appspot.com",
  messagingSenderId: "124268192076",
  appId: "1:124268192076:web:32af2a77272ad460216fe9",
  measurementId: "G-K1XH4LKYCX",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
