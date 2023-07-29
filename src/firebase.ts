import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTa6qIGL8O-LXwSJOZ0cnbJe-_QwYBjUg",
  authDomain: "udemy-discord-clone-dc6fe.firebaseapp.com",
  projectId: "udemy-discord-clone-dc6fe",
  storageBucket: "udemy-discord-clone-dc6fe.appspot.com",
  messagingSenderId: "705382781864",
  appId: "1:705382781864:web:375ef3c3f1513b4545039d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };
