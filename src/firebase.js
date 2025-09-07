import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9Q2MsZ7i_smg8VxsMcwDu5clh1i9ovqQ",
    authDomain: "quiz-app-95121.firebaseapp.com",
    projectId: "quiz-app-95121",
    storageBucket: "quiz-app-95121.firebasestorage.app",
    messagingSenderId: "644754167282",
    appId: "1:644754167282:web:9964ed25027fb5126fc76b",
    measurementId: "G-6WSSJW04X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    app,
    auth,
}