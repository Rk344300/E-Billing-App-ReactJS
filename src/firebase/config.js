
import { initializeApp } from "firebase/app";


import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDvI5Z3Dbmux9r4zenYMwZvhDaxDtpBNsE",
  authDomain: "e-bill-app-fbd98.firebaseapp.com",
  projectId: "e-bill-app-fbd98",
  storageBucket: "e-bill-app-fbd98.appspot.com",
  messagingSenderId: "934345739264",
  appId: "1:934345739264:web:d97a25af8e16995c4e1ce5",
  measurementId: "G-SL77FMS7GJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


//   starting both services i.e. storage and firestore(it is a real time database)
const projectStorage = getStorage(app);
const projectFireStore = getFirestore(app);

// export { projectStorage, projectFireStore, timestamp };

const FIRESTORE_COLLECTION_NAME = 'E-BILL-FILES'
export { projectStorage, projectFireStore , FIRESTORE_COLLECTION_NAME};
