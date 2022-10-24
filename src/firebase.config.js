// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyWMpi_ZSN34nFkKvkU7WIMF6ZFVEmi54",
    authDomain: "tech-city-online.firebaseapp.com",
    projectId: "tech-city-online",
    storageBucket: "tech-city-online.appspot.com",
    messagingSenderId: "352387550382",
    appId: "1:352387550382:web:8455201ae64f9fe4edf13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;