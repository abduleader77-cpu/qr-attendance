import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1pj5bUVtl9oobzyQMVPX4qye7YOoenpw",
  authDomain: "qr-attendance-414b9.firebaseapp.com",
  projectId: "qr-attendance-414b9",
  storageBucket: "qr-attendance-414b9.firebasestorage.app",
  messagingSenderId: "178872866188",
  appId: "1:178872866188:web:1f09ea4409a14cc5e7b2a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
