import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function App() {

  return (
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  )
}

export default App
