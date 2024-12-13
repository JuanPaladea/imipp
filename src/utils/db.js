import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "imipp-4320a.firebaseapp.com",
  projectId: "imipp-4320a",
  storageBucket: "imipp-4320a.appspot.com",
  messagingSenderId: "1072575523124",
  appId: "1:1072575523124:web:892736a952e02767bf1d61",
  measurementId: "G-SEBMPCYFRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()