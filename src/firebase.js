import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDAyhmHnPpyPFPd9jbYtW1dnElTk0hVV9Q",
    authDomain: "capstone-2c929.firebaseapp.com",
    projectId: "capstone-2c929",
    storageBucket: "capstone-2c929.appspot.com",
    messagingSenderId: "703705948873",
    appId: "1:703705948873:web:527839186b0e7c79eda318",
    measurementId: "G-ESSJDQ72LC"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);