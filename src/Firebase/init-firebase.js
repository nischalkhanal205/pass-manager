import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDDgQhP-c61nTNfhIMA7c956cWSPaVCdew",
  authDomain: "pass-manager-cdc54.firebaseapp.com",
  projectId: "pass-manager-cdc54",
  storageBucket: "pass-manager-cdc54.appspot.com",
  messagingSenderId: "221736624273",
  appId: "1:221736624273:web:0b3e54e63a87d6f0a01f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db=getFirestore(app);