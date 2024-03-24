import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCX0brN-e6bVMCg-lXBSYLDxjVcD_c9oMI",
  authDomain: "sparkthesummer.firebaseapp.com",
  projectId: "sparkthesummer",
  storageBucket: "sparkthesummer.appspot.com",
  messagingSenderId: "972197558364",
  appId: "1:972197558364:web:eaafa5568f8c0051730e99",
  measurementId: "G-WQP7NCBD7E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export default app;

export const db = getFirestore(app);
