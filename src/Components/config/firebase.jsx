
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1IFJe3Nbt8SlIIo7ql_jBvmrVfTx5FSI",
  authDomain: "testing-a176d.firebaseapp.com",
  projectId: "testing-a176d",
  storageBucket: "testing-a176d.appspot.com",
  messagingSenderId: "529652232958",
  appId: "1:529652232958:web:41dbd97ed26b6398faebaf",
  measurementId: "G-3NRBZ3BL0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

