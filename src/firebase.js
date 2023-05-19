// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAlTTQ1jNGTnqcVvtleMV6qXvCNYENkU5I",
  authDomain: "my-react-pad.firebaseapp.com",
  projectId: "my-react-pad",
  storageBucket: "my-react-pad.appspot.com",
  messagingSenderId: "67830010156",
  appId: "1:67830010156:web:ffabf4657352d736f61c89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
