import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUlJRQ_0vdHVKOPFXDGsiAYG_KpR1rOtU",
    authDomain: "blogapp-d6f7f.firebaseapp.com",
    projectId: "blogapp-d6f7f",
    storageBucket: "blogapp-d6f7f.appspot.com",
    messagingSenderId: "980977444060",
    appId: "1:980977444060:web:b638a5ae2ca740b26c0019",
    measurementId: "G-6GQH8JT3TK"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export  {auth};
