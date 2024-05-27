import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCwVMV71wKMFJn93vpxQAK7G97ayl280Fg",
    authDomain: "homebrewery-78b98.firebaseapp.com",
    projectId: "homebrewery-78b98",
    storageBucket: "homebrewery-78b98.appspot.com",
    messagingSenderId: "1093652118582",
    appId: "1:1093652118582:web:f9d14d96827e90f4372c97"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { app, auth};
