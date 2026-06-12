
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-336a3.firebaseapp.com",
  projectId: "ai-interview-336a3",
  storageBucket: "ai-interview-336a3.firebasestorage.app",
  messagingSenderId: "523431789171",
  appId: "1:523431789171:web:7dcef49731502c9be46006"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}