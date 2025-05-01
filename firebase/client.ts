// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2nWcrHxLICsV4_JVMFfnwSxCEIsL5VWc",
    authDomain: "acemyinterview-792fd.firebaseapp.com",
    projectId: "acemyinterview-792fd",
    storageBucket: "acemyinterview-792fd.firebasestorage.app",
    messagingSenderId: "718575491335",
    appId: "1:718575491335:web:d7cc09c15337d3d686cda2",
    measurementId: "G-1RH2WE9EMZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
