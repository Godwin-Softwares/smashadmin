import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwB7b2QZMcASVAVkCs5K8FRD2zIJvP6KY",
    authDomain: "ridesmash-924b9.firebaseapp.com",
    databaseURL: "https://ridesmash-924b9-default-rtdb.firebaseio.com",
    projectId: "ridesmash-924b9",
    storageBucket: "ridesmash-924b9.appspot.com",
    messagingSenderId: "1027238332681",
    appId: "1:1027238332681:web:a19e181ba90dda13842bd8",
    measurementId: "G-9H4XS8GQTV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);