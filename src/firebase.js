import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtRkhC11FWdME039PoO7ePNn41QPE3FLg",
    authDomain: "clone-e1513.firebaseapp.com",
    projectId: "clone-e1513",
    storageBucket: "clone-e1513.appspot.com",
    messagingSenderId: "766359088617",
    appId: "1:766359088617:web:b04291df95715a7179af78",
    measurementId: "G-727WCC50H9",
};

//initializing the app with firebaseConfig
const firebaseApp = initializeApp(firebaseConfig);

//initializing database
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

//firebase emulators:start
