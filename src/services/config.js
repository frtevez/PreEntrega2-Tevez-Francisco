
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID

    // apiKey: "AIzaSyCl5RlIBSygXpzdeVfhe76lezPAQxB1PGc",
    // authDomain: "euphonia-ecommerce-react.firebaseapp.com",
    // projectId: "euphonia-ecommerce-react",
    // storageBucket: "euphonia-ecommerce-react.appspot.com",
    // messagingSenderId: "611245529675",
    // appId: "1:611245529675:web:d2cbee0e85b6b354348bce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)